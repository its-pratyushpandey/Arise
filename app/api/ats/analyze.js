import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const form = new formidable.IncomingForm({ multiples: false });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({ error: "File upload error" });
    }
    const resumeFile = files.resume;
    const jdFile = files.jd;
    if (!resumeFile || !jdFile) {
      return res.status(400).json({ error: "Resume and Job Description required" });
    }
    // TODO: Parse resume and JD, run analysis, store result
    // For now, return mock analysis ID and score
    return res.status(200).json({ id: "mock123", score: 78 });
  });
}