import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle2, AlertTriangle } from "lucide-react";

const MAX_SIZE_MB = 2;

export default function TailorMatcher({ onUpload, jobs, results }) {
  const inputRef = useRef();
  const [error, setError] = useState("");

  const handleChange = e => {
    const files = Array.from(e.target.files);
    if (files.some(f => f.size > MAX_SIZE_MB * 1024 * 1024)) {
      setError("One or more files too large. Max 2MB each.");
      return;
    }
    setError("");
    onUpload && onUpload(files);
  };

  return (
    <Card className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-[#64ffda] text-2xl font-bold">Tailored Job Matching</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="font-semibold text-[#52e0c4]">Upload Multiple Job Descriptions</span>
          <div
            className="border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer bg-[#0a192f] border-[#52e0c4] mt-2"
            onClick={() => inputRef.current.click()}
            tabIndex={0}
            role="button"
            aria-label="Upload job descriptions"
          >
            <FileText className="w-8 h-8 text-[#64ffda] mb-2" />
            <span className="font-semibold mb-2">Click to select TXT, PDF, or DOCX (max 2MB each)</span>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.docx,.txt"
              multiple
              className="hidden"
              onChange={handleChange}
              aria-label="Job description file input"
            />
            {error && (
              <div className="mt-4 flex items-center gap-2 text-red-400">
                <AlertTriangle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
        {jobs && jobs.length > 0 && (
          <div className="mt-6">
            <div className="font-semibold mb-2 text-[#52e0c4]">Uploaded Jobs</div>
            <ul className="space-y-2">
              {jobs.map((job, i) => (
                <li key={i} className="flex items-center gap-2 text-[#e6f1ff]">
                  <FileText className="w-4 h-4 text-[#64ffda]" />
                  <span>{job.filename}</span>
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </li>
              ))}
            </ul>
          </div>
        )}
        {results && results.length > 0 && (
          <div className="mt-6">
            <div className="font-semibold mb-2 text-[#52e0c4]">Match Results</div>
            <ul className="space-y-2">
              {results.map((res, i) => (
                <li key={i} className="flex flex-col gap-1 bg-[#0a192f] rounded p-2">
                  <span className="text-[#e6f1ff] font-bold">{res.jobTitle}</span>
                  <span className="text-[#64ffda]">Score: {res.score}%</span>
                  <span className="text-[#52e0c4]">{res.summary}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}