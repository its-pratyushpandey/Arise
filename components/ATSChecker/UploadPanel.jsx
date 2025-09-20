import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, UploadCloud, FileText, CheckCircle2 } from "lucide-react";

const ACCEPTED_TYPES = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];
const MAX_SIZE_MB = 2;

export default function UploadPanel({ onUpload, recentFiles }) {
  const inputRef = useRef();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFile = f => {
    if (!f) return;
    if (!ACCEPTED_TYPES.includes(f.type)) {
      setError("Unsupported file type. Only PDF, DOCX, TXT allowed.");
      return;
    }
    if (f.size > MAX_SIZE_MB * 1024 * 1024) {
      setError("File too large. Max 2MB allowed.");
      return;
    }
    setFile(f);
    setError("");
    onUpload && onUpload(f);
  };

  const handleDrop = e => {
    e.preventDefault();
    setDragActive(false);
    const f = e.dataTransfer.files[0];
    handleFile(f);
  };

  const handleChange = e => {
    const f = e.target.files[0];
    handleFile(f);
  };

  return (
    <Card className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-[#64ffda] text-2xl font-bold">Upload Resume</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer ${dragActive ? "border-[#52e0c4] bg-[#0a192f]" : "border-[#64ffda] bg-[#112240]"}`}
          onDragOver={e => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={e => { e.preventDefault(); setDragActive(false); }}
          onDrop={handleDrop}
          onClick={() => inputRef.current.click()}
          tabIndex={0}
          role="button"
          aria-label="Upload resume"
        >
          <UploadCloud className="w-12 h-12 text-[#64ffda] mb-2" />
          <span className="font-semibold mb-2">Drag & drop or click to select PDF, DOCX, or TXT (max 2MB)</span>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.docx,.txt"
            className="hidden"
            onChange={handleChange}
            aria-label="Resume file input"
          />
          {file && (
            <div className="mt-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#52e0c4]" />
              <span className="text-[#e6f1ff]">{file.name}</span>
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            </div>
          )}
          {error && (
            <div className="mt-4 flex items-center gap-2 text-red-400">
              <AlertTriangle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}
        </motion.div>
        {recentFiles && recentFiles.length > 0 && (
          <div className="mt-6">
            <div className="font-semibold mb-2 text-[#52e0c4]">Recent Analyses</div>
            <ul className="space-y-2">
              {recentFiles.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-[#e6f1ff]">
                  <FileText className="w-4 h-4 text-[#64ffda]" />
                  <span>{f.filename}</span>
                  <span className="text-xs text-[#52e0c4]">{f.score ? `Score: ${f.score}` : "Pending"}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}