import React, { useState } from "react";
import { UploadPanel, AnalysisProgress, ResultsSummary, DetailedAnalysis, ParsedView, KeywordMatcher, BenchmarkChart, CoverLetterCheckModal, TailorMatcher } from "./index";

export default function ATSChecker() {
  // State for controlling the flow
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentFiles, setRecentFiles] = useState([]);

  // Simulate upload and analysis
  const handleUpload = async (f) => {
    setFile(f);
    setLoading(true);
    setError("");
    // Simulate API call
    setTimeout(() => {
      const fakeAnalysis = {
        score: Math.floor(Math.random() * 100),
        details: {},
        filename: f.name,
      };
      setAnalysis(fakeAnalysis);
      setRecentFiles((prev) => [{ filename: f.name, score: fakeAnalysis.score }, ...prev].slice(0, 5));
      setLoading(false);
    }, 2000);
  };

  // Export handler: download a simple TXT file (simulate export)
  const handleExport = () => {
    if (!analysis || !file) return;
    const blob = new Blob([
      `ATS Resume Score: ${analysis.score}%\n`,
      `Filename: ${file.name}\n`,
      `\n--- ATS Resume Report ---\n`,
      'Thank you for using the ATS Resume Score Checker.'
    ], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${file.name.replace(/\.[^/.]+$/, "") || "resume"}-ats.txt`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <UploadPanel onUpload={handleUpload} recentFiles={recentFiles} />
      {loading && <AnalysisProgress />}
      {analysis && !loading && (
        <div className="mt-6 space-y-4">
          <ResultsSummary
            score={analysis.score}
            summary={`Your resume scored ${analysis.score}%. Download your ATS-optimized report below.`}
            onExport={handleExport}
          />
          {/* Add more detailed analysis components as needed */}
        </div>
      )}
      {error && <div className="text-red-500 mt-4">{error}</div>}
    </div>
  );
}