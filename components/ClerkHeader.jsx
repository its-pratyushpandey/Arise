"use client";
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ATSChecker from "@/components/ATSChecker/ATSChecker";
export default function ClerkHeader() {
  const [atsOpen, setAtsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16">
      {/* Professional Logo */}
      <div className="flex items-center">
        <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(108,71,255,0.5)] select-none" style={{letterSpacing:'0.04em'}}>
          Arise
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button
          className="bg-gradient-to-r from-[#64ffda] to-[#52e0c4] text-[#0a192f] font-bold px-4 py-2 rounded-lg shadow-lg border-2 border-[#0a192f] hover:from-[#52e0c4] hover:to-[#64ffda] transition-all text-sm focus:ring-4 focus:ring-[#64ffda] z-50"
          style={{ minWidth: 160 }}
          onClick={() => setAtsOpen(true)}
        >
          ATS Resume Score Checker
        </Button>
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
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );

}
