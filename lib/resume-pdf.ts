import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function createResumePdf(resumeText: string): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesRomanBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  let page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();
  const margin = 50;
  const lineHeight = 14;
  let y = height - margin;

  const lines = resumeText.split("\n");

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const isSectionHeader = line === line.toUpperCase() && line.length > 0 && line.length < 50;
    const isBullet = line.startsWith("- ") || line.startsWith("• ");

    if (y < margin + lineHeight) {
      page = pdfDoc.addPage([612, 792]);
      y = height - margin;
    }

    if (isSectionHeader) {
      y -= 8;
      page.drawText(line.toUpperCase(), {
        x: margin,
        y,
        size: 13,
        font: timesRomanBold,
        color: rgb(0, 0, 0),
      });
      y -= lineHeight;
    } else if (isBullet) {
      const text = line.replace(/^[-\•]\s*/, "");
      const wrapped = wrapText(text, 90);
      for (const wLine of wrapped) {
        if (y < margin + lineHeight) {
          page = pdfDoc.addPage([612, 792]);
          y = height - margin;
        }
        page.drawText(`• ${wLine}`, {
          x: margin + 10,
          y,
          size: 11,
          font: timesRoman,
          color: rgb(0, 0, 0),
        });
        y -= lineHeight;
      }
    } else if (line.trim() === "") {
      y -= lineHeight / 2;
    } else {
      const wrapped = wrapText(line, 95);
      for (const wLine of wrapped) {
        if (y < margin + lineHeight) {
          page = pdfDoc.addPage([612, 792]);
          y = height - margin;
        }
        page.drawText(wLine, {
          x: margin,
          y,
          size: 11,
          font: timesRoman,
          color: rgb(0, 0, 0),
        });
        y -= lineHeight;
      }
    }
  }

  return pdfDoc.save();
}

function wrapText(text: string, maxChars: number): string[] {
  if (text.length <= maxChars) return [text];

  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    if ((currentLine + " " + word).trim().length > maxChars) {
      if (currentLine) lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = (currentLine + " " + word).trim();
    }
  }

  if (currentLine) lines.push(currentLine);
  return lines;
}
