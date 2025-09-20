import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, EyeOff } from "lucide-react";

export default function ParsedView({ parsedText, originalText }) {
  const [showParsed, setShowParsed] = useState(true);

  return (
    <Card className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-[#64ffda] text-2xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6 text-[#52e0c4]" />
          {showParsed ? "ATS Parsed View" : "Original Resume Text"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={false}
          animate={{ rotateY: showParsed ? 0 : 180 }}
          transition={{ duration: 0.6 }}
          className="relative"
          style={{ perspective: 1000 }}
        >
          <div
            className={`absolute w-full h-full ${showParsed ? "block" : "hidden"}`}
            aria-label="Parsed resume text"
          >
            <pre className="bg-[#0a192f] text-[#e6f1ff] p-4 rounded overflow-x-auto max-h-64 whitespace-pre-wrap">
              {parsedText}
            </pre>
          </div>
          <div
            className={`absolute w-full h-full ${!showParsed ? "block" : "hidden"}`}
            aria-label="Original resume text"
          >
            <pre className="bg-[#0a192f] text-[#e6f1ff] p-4 rounded overflow-x-auto max-h-64 whitespace-pre-wrap">
              {originalText}
            </pre>
          </div>
        </motion.div>
        <Button
          className="bg-[#64ffda] text-[#0a192f] font-bold mt-4 hover:bg-[#52e0c4] flex items-center gap-2"
          onClick={() => setShowParsed(v => !v)}
          aria-label={showParsed ? "Show original resume" : "Show ATS parsed view"}
        >
          {showParsed ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          {showParsed ? "Show Original" : "Show Parsed"}
        </Button>
      </CardContent>
    </Card>
  );
}