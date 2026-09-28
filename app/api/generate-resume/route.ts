import { NextRequest, NextResponse } from "next/server";
import { resumeData } from "@/lib/resume-data";
import { generateResumeWithGroq } from "@/lib/groq";
import { createResumePdf } from "@/lib/resume-pdf";
import { fetchGitHubRepos } from "@/lib/github/fetch";
import { filterAndRankProjects } from "@/lib/github/filter";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { desiredRole } = body;

    if (!desiredRole || typeof desiredRole !== "string") {
      return NextResponse.json(
        { error: "desiredRole is required" },
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
      desiredRole,
      JSON.stringify(resumeData, null, 2),
      projectsText
    );

    const pdfBytes = await createResumePdf(resumeText);

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="resume-${desiredRole.replace(/\s+/g, "-").toLowerCase()}.pdf"`,
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
