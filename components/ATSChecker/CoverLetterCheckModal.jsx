import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle2, AlertTriangle } from "lucide-react";

const ACCEPTED_TYPES = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];
const MAX_SIZE_MB = 2;

export default function CoverLetterCheckModal({ open, onClose, onUpload }) {
  const inputRef = useRef();
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

  const handleChange = e => {
    const f = e.target.files[0];
    handleFile(f);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 flex items-center justify-center z-50"
        aria-modal="true"
        role="dialog"
      >
        <div className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg p-8 w-full max-w-md">
          <div className="font-bold text-[#64ffda] text-xl mb-2">Upload Cover Letter</div>
          <div className="mb-4">Optional: Analyze your cover letter for ATS compatibility and suggestions.</div>
          <div
            className="border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer bg-[#0a192f] border-[#52e0c4]"
            onClick={() => inputRef.current.click()}
            tabIndex={0}
            role="button"
            aria-label="Upload cover letter"
          >
            <FileText className="w-8 h-8 text-[#64ffda] mb-2" />
            <span className="font-semibold mb-2">Click to select PDF, DOCX, or TXT (max 2MB)</span>
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.docx,.txt"
              className="hidden"
              onChange={handleChange}
              aria-label="Cover letter file input"
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
          </div>
          <Button
            className="bg-[#64ffda] text-[#0a192f] font-bold mt-4 hover:bg-[#52e0c4]"
            onClick={onClose}
            aria-label="Close cover letter modal"
          >
            Close
          </Button>
        </div>
      </motion.div>
    </Dialog>
  );
}