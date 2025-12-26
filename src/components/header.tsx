"use client";
import { cn } from "@/src/lib/utils";
import { Briefcase, Linkedin, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";
import Section from "./section";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.endsWith(path);
  return (
    <Section>
      <header className="flex gap-4 h-[8vh]">
        <div className="flex justify-start items-center flex-auto w-18 uppercase font-semibold">
          <Link
            href="/"
            className="md:text-2xl text-md sm:text-lg tracking-wide"
            style={{ fontFamily: "var(--font-teko)" }}
          >
            claude SODOKIN
          </Link>
        </div>
        <div className="min-w-0 flex items-center justify-center">
          <nav className="flex space-x-1 md:space-x-4 items-center justify-center bg-muted/50 dark:bg-muted/30 rounded-3xl p-1 border border-border/50">
            <Link
              href="/"
              className={cn(
                "rounded-3xl px-3 md:px-6 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-accent/50",
                isActive("/") &&
                  "bg-background dark:bg-card text-primary shadow-sm"
              )}
            >
              <User className="size-4" />
              <span className="hidden md:inline">About</span>
            </Link>
            <Link
              href="/projects"
              className={cn(
                "rounded-3xl px-3 md:px-6 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-accent/50",
                isActive("projects") &&
                  "bg-background dark:bg-card text-primary shadow-sm"
              )}
            >
              <Briefcase className="size-4" />
              <span className="hidden md:inline">Projects</span>
            </Link>{" "}
            <Link
              href="/contact"
              className={cn(
                "rounded-3xl px-3 md:px-6 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-accent/50",
                isActive("contact") &&
                  "bg-background dark:bg-card text-primary shadow-sm"
              )}
            >
              <Mail className="size-4" />
              <span className="hidden md:inline">Contact</span>
            </Link>{" "}
          </nav>
        </div>
        <div className="flex flex-auto justify-end items-center space-x-4 ">
          <Link
            href="https://www.linkedin.com/in/sodokin-claude-bab296344/"
            target="_blank"
          >
            <Button
              className="rounded-none w-5 h-5 p-4 cursor-pointer"
              size={"icon"}
            >
              <Linkedin />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </header>
    </Section>
  );
}
