"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BriefcaseIcon,
  LineChart,
  TrendingUp,
  TrendingDown,
  Brain,
} from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ATSChecker from "@/components/ATSChecker/ATSChecker";
import PortfolioGeneratorDashboard from "./portfolio-generator-dashboard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const DashboardView = ({ insights }) => {
  const [atsOpen, setAtsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  // Defensive: handle missing or undefined insights
  if (!insights || !insights.salaryRanges) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20">
        <p className="text-lg text-red-500 font-semibold mb-4">Industry insights data is unavailable.</p>
        <p className="text-gray-600 mb-4">Please complete your onboarding and ensure your profile is set up correctly.</p>
      </div>
    );
  }
  // Transform salary data for the chart
  const salaryData = Array.isArray(insights.salaryRanges)
    ? insights.salaryRanges.map((range) => ({
        name: range.role,
        min: range.min / 1000,
        max: range.max / 1000,
        median: range.median / 1000,
      }))
    : [];

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return { icon: TrendingUp, color: "text-green-500" };
      case "neutral":
        return { icon: LineChart, color: "text-yellow-500" };
      case "negative":
        return { icon: TrendingDown, color: "text-red-500" };
      default:
        return { icon: LineChart, color: "text-gray-500" };
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  // Format dates using date-fns
  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    { addSuffix: true }
  );

  return (
    <div className="space-y-6">
      {/* Main Dashboard Action Buttons */}
      <div className="w-full flex flex-wrap justify-center gap-4 mb-8">
        <Button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition-all text-base">
          Create Resume
        </Button>
        <Button className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:from-green-500 hover:to-green-700 transition-all text-base">
          Generate Cover Letter
        </Button>
        <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:from-yellow-500 hover:to-yellow-700 transition-all text-base">
          Mock Preparation App
        </Button>
        
        <Button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:from-purple-500 hover:to-purple-700 transition-all text-base">
          GitHub Readme Profile Generator
        </Button>
        <Button
          className="bg-gradient-to-r from-[#64ffda] to-[#52e0c4] text-[#0a192f] font-bold px-6 py-3 rounded-lg shadow-lg border-2 border-[#0a192f] hover:from-[#52e0c4] hover:to-[#64ffda] transition-all text-base focus:ring-4 focus:ring-[#64ffda] z-50"
          style={{ minWidth: 220 }}
          onClick={() => setAtsOpen(true)}
        >
          ATS Resume Score Checker
        </Button>
      </div>
      <Dialog open={atsOpen} onOpenChange={setAtsOpen}>
        <DialogContent className="max-w-2xl w-full p-0 bg-[#0a192f] border-[#64ffda] z-[9999]">
          <DialogHeader>
            <DialogTitle className="text-[#64ffda] text-2xl">ATS Resume Score Checker</DialogTitle>
            <DialogDescription className="text-[#e6f1ff]">Upload your resume to get an instant ATS compatibility score and actionable feedback.</DialogDescription>
          </DialogHeader>
          <div className="p-4">
            <ATSChecker />
          </div>
        </DialogContent>
      </Dialog>
      {/* End ATS Button and Modal */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
      </div>

  {/* Market Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Market Outlook
            </CardTitle>
            <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.marketOutlook}</div>
            <p className="text-xs text-muted-foreground">
              Next update {nextUpdateDistance}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Industry Growth
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {insights.growthRate.toFixed(1)}%
            </div>
            <Progress value={insights.growthRate} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{insights.demandLevel}</div>
            <div
              className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
                insights.demandLevel
              )}`}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
            <Brain className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1">
              {insights.topSkills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Salary Ranges Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Salary Ranges by Role</CardTitle>
          <CardDescription>
            Displaying minimum, median, and maximum salaries (in thousands)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salaryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-background border rounded-lg p-2 shadow-md">
                          <p className="font-medium">{label}</p>
                          {payload.map((item) => (
                            <p key={item.name} className="text-sm">
                              {item.name}: ${item.value}K
                            </p>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="min" fill="#94a3b8" name="Min Salary (K)" />
                <Bar dataKey="median" fill="#64748b" name="Median Salary (K)" />
                <Bar dataKey="max" fill="#475569" name="Max Salary (K)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Industry Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Key Industry Trends</CardTitle>
            <CardDescription>
              Current trends shaping the industry
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {insights.keyTrends.map((trend, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                  <span>{trend}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Skills</CardTitle>
            <CardDescription>Skills to consider developing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {insights.recommendedSkills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={portfolioOpen} onOpenChange={setPortfolioOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-[#112240] border-[#64ffda] z-[9999]">
          <DialogHeader>
            <DialogTitle className="text-[#64ffda] text-2xl">Portfolio Generator</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <PortfolioGeneratorDashboard />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DashboardView;