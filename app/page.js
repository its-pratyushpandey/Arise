"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Trophy,
  Target,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import HeroSection from "@/components/hero";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ATSChecker from "@/components/ATSChecker/ATSChecker";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { features } from "@/data/features";
import { testimonial } from "@/data/testimonial";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
import { validateEnvironment } from "@/lib/env-validation";

export default function LandingPage() {
  const [envValidation, setEnvValidation] = useState({ isValid: true, getMessage: () => "" });
  const [atsOpen, setAtsOpen] = useState(false);

  useEffect(() => {
    setEnvValidation(validateEnvironment());
    if (typeof window !== 'undefined') {
      const handler = () => setAtsOpen(true);
      window.addEventListener('open-ats-modal', handler);
      return () => window.removeEventListener('open-ats-modal', handler);
    }
  }, []);

  return (
    <>
      <div className="grid-background"></div>

      {/* Environment Check Banner */}
      {!envValidation.isValid && (
        <div className="bg-yellow-500/10 border-b border-yellow-500/20">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">
                  App configuration needed: {envValidation.getMessage()}
                </span>
              </div>
              <Link href="/setup">
                <Button variant="outline" size="sm">
                  Configure Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <HeroSection />
      {/* Global ATS Modal */}
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

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12 text-blue-700">
            Powerful Features for Your Career Growth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-blue-50 border-2 border-blue-100 hover:border-blue-700 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl"
              >
                <CardContent className="pt-8 pb-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 shadow-lg">
                      {React.cloneElement(feature.icon, { className: "w-10 h-10 text-blue-700" })}
                    </span>
                    <h3 className="text-lg font-bold mb-1 text-blue-900">{feature.title}</h3>
                    <p className="text-blue-800 text-sm font-medium">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">50+</h3>
              <p className="text-blue-900 font-semibold">Industries Supported</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">1000+</h3>
              <p className="text-blue-900 font-semibold">AI-Optimized Resumes</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">500+</h3>
              <p className="text-blue-900 font-semibold">Custom Cover Letters</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-700">200+</h3>
              <p className="text-blue-900 font-semibold">GitHub Readme Profiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-700">How It Works</h2>
            <p className="text-blue-900 md:text-lg">
              Four simple steps to accelerate your career growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 bg-blue-50 rounded-xl shadow-sm p-6 border border-blue-100"
              >
                <span className="mb-2 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 shadow-lg">
                  {React.cloneElement(item.icon, { className: "w-10 h-10 text-blue-700" })}
                </span>
                <h3 className="font-semibold text-lg text-blue-900">{item.title}</h3>
                <p className="text-blue-800 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-700">
              Frequently Asked Questions
            </h2>
            <p className="text-blue-900 md:text-lg">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}> 
                  <AccordionTrigger className="text-left text-blue-900 font-semibold text-base md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-800 text-sm md:text-base">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto rounded-xl max-w-3xl px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-blue-700">
              Empower Your Career Growth with AI-Powered Insights
            </h2>
            <p className="mx-auto max-w-[600px] text-blue-900 md:text-xl">
              Trusted by professionals worldwide to unlock new opportunities and achieve success.
            </p>
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 mt-5 animate-bounce bg-blue-700 text-white font-bold border-2 border-blue-700 hover:bg-white hover:text-blue-700"
              >
               Begin Your Growth Journey<ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}