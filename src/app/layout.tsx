import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "Priyanka Das Dewan — Web Application Developer & NSDA Trainer",
  description:
    "Portfolio of Priyanka Das Dewan: web application developer (Python, Django, JavaScript) and NSDA-certified trainer and assessor based in Dhaka.",
  keywords: ["Priyanka Das Dewan", "Web Application Developer", "Django", "NSDA Assessor", "Web Development Trainer", "Dhaka"],
  authors: [{ name: "Priyanka Das Dewan" }],
  openGraph: {
    title: "Priyanka Das Dewan — Web Application Developer & NSDA Trainer",
    description: "Web application developer and NSDA-certified trainer and assessor in Dhaka.",
    type: "website",
    images: ["/hero-portrait.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#110d1b" },
  ],
};

// Runs before the page paints. Light is the default unless the visitor chose dark.
const themeScript = `(function(){try{document.documentElement.classList.toggle("dark",localStorage.getItem("theme")==="dark");}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
