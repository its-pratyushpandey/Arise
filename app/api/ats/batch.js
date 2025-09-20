export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  // TODO: Parse multiple resumes and JDs, run batch analysis
  // For now, return mock batch results
  return res.status(200).json({
    results: [
      { id: "r1", filename: "Resume1.pdf", score: 80 },
      { id: "r2", filename: "Resume2.docx", score: 74 }
    ]
  });
}