const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

interface GroqMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface GroqResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export async function generateResumeWithGroq(
  desiredRole: string,
  resumeData: string,
  projects: string
): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is not set in environment variables");
  }

  const systemPrompt = `You are an expert ATS-friendly resume writer. Generate a professional, ATS-optimized resume based on the provided information and desired role. 

Rules:
- Use clear, professional language
- Highlight relevant skills and experience for the desired role
- Use bullet points for achievements
- Quantify impact where possible
- Keep it concise and relevant
- Format as plain text with clear section headers
- Do NOT use markdown formatting (no #, *, -, etc.)
- Use UPPERCASE for section headers
- Use simple dashes for bullet points`;

  const userPrompt = `Desired Role: ${desiredRole}

CANDIDATE DATA:
${resumeData}

GITHUB PROJECTS:
${projects}

Generate an ATS-friendly resume tailored for the role of ${desiredRole}.`;

  const messages: GroqMessage[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt },
  ];

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      temperature: 0.7,
      max_tokens: 2048,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API error: ${response.status} — ${errorText}`);
  }

  const data: GroqResponse = await response.json();

  if (!data.choices?.[0]?.message?.content) {
    throw new Error("Groq API returned empty response");
  }

  return data.choices[0].message.content;
}
