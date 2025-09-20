import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function KeywordMatcher({ matched, missing }) {
  return (
    <div className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg w-full max-w-lg mx-auto mt-8 p-6">
      <div className="font-bold text-[#64ffda] mb-2">Keyword Optimization</div>
      <div className="mb-4">
        <span className="text-[#52e0c4] font-semibold">Matched Keywords</span>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="flex flex-wrap gap-2 mt-2"
        >
          {matched.map((kw, i) => (
            <motion.li
              key={kw}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Badge className="bg-[#64ffda] text-[#0a192f] font-bold">{kw}</Badge>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div>
        <span className="text-[#52e0c4] font-semibold">Missing Keywords</span>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="flex flex-wrap gap-2 mt-2"
        >
          {missing.map((kw, i) => (
            <motion.li
              key={kw}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Badge className="bg-red-400 text-[#0a192f] font-bold">{kw}</Badge>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}