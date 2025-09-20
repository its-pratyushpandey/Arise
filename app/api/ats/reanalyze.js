export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { id } = req.query;
  // TODO: Apply suggested edits, re-score resume
  // For now, return mock updated score
  return res.status(200).json({ id, score: 82, summary: "Improvements applied. Score increased." });
}