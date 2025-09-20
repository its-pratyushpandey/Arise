import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";

export default function ResultsSummary({ score, scores, summary, quickFixes, onExport }) {
  return (
    <Card className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-[#64ffda] text-2xl font-bold flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-[#52e0c4]" />
          Resume Match Score
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-5xl font-bold text-[#64ffda] mb-2">
            {score}%
          </div>
          <div className="flex gap-4 mb-4">
            {scores && typeof scores === 'object' && Object.entries(scores).map(([k, v]) => (
              <div key={k} className="flex flex-col items-center">
                <span className="text-[#52e0c4] text-sm font-semibold">{k.replace(/([A-Z])/g, " $1")}</span>
                <span className="text-lg font-bold">{v}</span>
              </div>
            ))}
          </div>
          <div className="mb-4 text-center text-[#e6f1ff]">
            {summary}
          </div>
          {Array.isArray(quickFixes) && quickFixes.length > 0 && (
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
              className="mb-4 w-full"
            >
              {quickFixes.map((fix, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-[#0a192f] text-[#52e0c4] rounded px-3 py-2 mb-2 shadow"
                >
                  {fix}
                </motion.li>
              ))}
            </motion.ul>
          )}
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-full flex justify-center"
          >
            <Button
              className="bg-[#64ffda] text-[#0a192f] font-bold mt-2 hover:bg-[#52e0c4] flex items-center gap-2 px-6 py-3 rounded-lg text-base shadow-lg w-full max-w-xs transition-all duration-300"
              onClick={onExport}
              aria-label="Export ATS-optimized resume"
            >
              <Download className="w-5 h-5" /> Export ATS Resume
            </Button>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
}