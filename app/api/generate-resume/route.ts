import { NextRequest, NextResponse } from "next/server";
import { resumeData } from "@/lib/resume-data";
import { generateResumeWithGroq } from "@/lib/groq";
import { createResumePdf } from "@/lib/resume-pdf";
import { fetchGitHubRepos } from "@/lib/github/fetch";
import { filterAndRankProjects } from "@/lib/github/filter";
import { rateLimit, getClientIp } from "@/lib/api/rate-limit";

const MAX_ROLE_LENGTH = 100;

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const { allowed, remaining, resetAt } = rateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": new Date(resetAt).toISOString(),
          },
        }
      );
    }

    const body = await request.json();
    const { desiredRole } = body;

    if (!desiredRole || typeof desiredRole !== "string") {
      return NextResponse.json(
        { error: "desiredRole is required" },
        { status: 400 }
      );
    }

    const trimmedRole = desiredRole.trim();

    if (trimmedRole.length === 0) {
      return NextResponse.json(
        { error: "desiredRole cannot be empty" },
        { status: 400 }
      );
    }

    if (trimmedRole.length > MAX_ROLE_LENGTH) {
      return NextResponse.json(
        { error: `desiredRole must be ${MAX_ROLE_LENGTH} characters or less` },
        { status: 400 }
      );
    }

    const repos = await fetchGitHubRepos();
    const projects = filterAndRankProjects(repos).slice(0, 10);

    const projectsText = projects
      .map((p) => {
        return `${p.name}: ${p.description} (Stars: ${p.stars}, Language: ${p.language})`;
      })
      .join("\n");

    const resumeText = await generateResumeWithGroq(
      trimmedRole,
      JSON.stringify(resumeData, null, 2),
      projectsText
    );

    const pdfBytes = await createResumePdf(resumeText);

    const safeFilename = trimmedRole
      .replace(/[^a-zA-Z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="resume-${safeFilename}.pdf"`,
        "X-RateLimit-Remaining": remaining.toString(),
        "X-RateLimit-Reset": new Date(resetAt).toISOString(),
      },
    });
  } catch (error) {
    console.error("Resume generation error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to generate resume: ${message}` },
      { status: 500 }
    );
  }
}
