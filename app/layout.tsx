import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "@/app/main.css";
import TopicNavigationBar from "./topicnavbar";

const lexendFont = Lexend({
  variable: "--lexend-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CentenV's Wiki",
  description: "",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${lexendFont.variable} ${lexendFont.variable} antialiased`}>
        <div className='flex flex-row overflow-hidden bg-wiki-background-color h-screen w-screen p-4 gap-3 flex-shrink-0'>
          {/* Navbar */}
          <TopicNavigationBar />
          {/* Content */}
          <main className='bg-wiki-foreground-color rounded-wiki border-wiki border-wiki-border-color w-full h-full'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
