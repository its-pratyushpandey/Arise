export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { id } = req.query;
  // TODO: Fetch analysis result from DB
  // For now, return mock result
  return res.status(200).json({
    id,
    uploadedAt: "2025-09-18T10:00:00Z",
    filename: "Pratyush_Resume.pdf",
    score: 78,
    scores: {
      keywordCoverage: 72,
      formatCompatibility: 90,
      readability: 82,
      skillsMatch: 68,
      titleMatch: 76
    },
    summary: "Good structure, needs stronger keywords and quantifiable achievements.",
    parsedText: "Plain ATS-friendly text here...",
    issues: [
      { type: "format", message: "Contains multiple columns (may break ATS)", priority: "high" },
      { type: "keywords", message: "Missing keywords: 'AWS', 'Kubernetes'", priority: "medium" }
    ],
    sectionAnalysis: {
      experience: { score: 75, suggestions: ["Add metrics — % growth, $ saved"] },
      education: { score: 90, suggestions: [] },
      skills: { score: 66, suggestions: ["Add 'Docker', 'CI/CD' if applicable"] }
    },
    suggestedEdits: [
      { location: "Experience > Company A", before: "Worked on cloud", after: "Designed and implemented cloud architecture, reducing infra costs by 18%" }
    ],
    benchmarking: {
      roleMedian: 82,
      topCandidates: [88, 91, 95]
    }
  });
}