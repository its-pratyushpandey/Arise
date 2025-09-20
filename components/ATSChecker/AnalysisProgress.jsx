import React from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

export default function AnalysisProgress({ progress, logs }) {
  return (
    <Card className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg w-full max-w-lg mx-auto mt-8">
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <span className="font-semibold text-[#64ffda]">Analyzing Resume...</span>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-2"
            >
              <Progress value={progress} className="bg-[#0a192f] h-4" />
              <div className="text-right text-[#52e0c4] font-bold mt-1">
                {progress}%
              </div>
            </motion.div>
          </div>
          <div className="mt-4">
            <span className="font-semibold text-[#52e0c4]">Analysis Steps</span>
            <ul className="mt-2 space-y-1">
              {(logs || []).map((log, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="text-[#e6f1ff]"
                >
                  {log}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
}