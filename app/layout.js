import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "sonner";
import ClerkHeader from "@/components/ClerkHeader";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arise",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className + " antialiased gradient-bg"}>
          {/* Animated Gradient Background */}
          <div className="fixed inset-0 -z-10 w-full h-full bg-gradient-to-br from-[#6c47ff] via-[#00c6fb] to-[#fff] animate-gradient" />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Header /> removed: Header is now empty and should not be rendered */}
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

          
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}