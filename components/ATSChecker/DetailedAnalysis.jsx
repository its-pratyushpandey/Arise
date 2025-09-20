import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DetailedAnalysis({ sectionAnalysis }) {
  return (
    <Card className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-[#64ffda] text-2xl font-bold">Section-by-Section Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(sectionAnalysis || {}).map(([section, data], i) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Accordion.Item value={section} className="mb-2">
                <Accordion.Trigger className="flex justify-between items-center px-4 py-2 bg-[#0a192f] rounded cursor-pointer">
                  <span className="font-semibold text-[#52e0c4]">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                  <Badge className="bg-[#64ffda] text-[#0a192f] font-bold">{data.score}</Badge>
                </Accordion.Trigger>
                <Accordion.Content className="px-4 py-2">
                  {data.suggestions && data.suggestions.length > 0 ? (
                    <ul className="list-disc ml-6">
                      {data.suggestions.map((s, idx) => (
                        <li key={idx} className="text-[#e6f1ff]">{s}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="text-[#e6f1ff]">No suggestions.</span>
                  )}
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}