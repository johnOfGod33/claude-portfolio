import { ThemeProvider } from "@/src/components/theme-provider";
import { cn } from "@/src/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Teko } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Claude SODOKIN • Technicien Génie Civil",
  description:
    "Technicien en génie civil spécialisé dans le dimensionnement structurel et la gestion de projets de construction. Conception, analyse et réalisation d'ouvrages conformes aux normes (Eurocode, béton armé, structures mixtes).",
  keywords: [
    "génie civil",
    "dimensionnement structurel",
    "gestion de projets",
    "béton armé",
    "structures mixtes",
    "Archicad",
    "AutoCAD",
    "ETABS",
    "technicien génie civil",
    "calcul de structures",
    "Eurocode",
  ],
  authors: [{ name: "Claude SODOKIN" }],
  openGraph: {
    title: "Claude SODOKIN - Technicien Génie Civil & Structure",
    description:
      "Technicien en génie civil passionné par le dimensionnement structurel et la gestion complète de projets de construction.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude SODOKIN - Technicien Génie Civil & Structure",
    description:
      "Technicien en génie civil spécialisé dans le dimensionnement structurel et la gestion de projets de construction.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          geistMono.variable,
          geistSans.variable,
          teko.variable,
          "antialiased",
          "h-full"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
