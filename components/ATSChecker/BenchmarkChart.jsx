import React, { useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";

export default function BenchmarkChart({ score, roleMedian, topCandidates }) {
  const ringRef = useRef();
  useEffect(() => {
    if (ringRef.current) {
      gsap.fromTo(
        ringRef.current,
        { strokeDashoffset: 440 },
        { strokeDashoffset: 440 - (score / 100) * 440, duration: 1.2, ease: "power2.out" }
      );
    }
  }, [score]);

  return (
    <Card className="bg-[#112240] border-2 border-[#64ffda] text-[#e6f1ff] rounded-xl shadow-lg w-full max-w-lg mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-[#64ffda] text-2xl font-bold">Benchmarking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="#0a192f"
              stroke="#112240"
              strokeWidth="10"
            />
            <circle
              ref={ringRef}
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="#64ffda"
              strokeWidth="10"
              strokeDasharray="440"
              strokeDashoffset="440"
              style={{ transition: "stroke-dashoffset 1.2s" }}
            />
            <text
              x="80"
              y="90"
              textAnchor="middle"
              fontSize="2em"
              fill="#64ffda"
              fontWeight="bold"
            >
              {score}%
            </text>
          </svg>
          <div className="mt-4 text-[#52e0c4] font-semibold">Role Median: {roleMedian}%</div>
          <div className="mt-2 text-[#e6f1ff]">Top Candidates: {topCandidates.join(", ")}%</div>
        </div>
      </CardContent>
    </Card>
  );
}