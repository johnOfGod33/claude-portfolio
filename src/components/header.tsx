"use client";
import { cn } from "@/src/lib/utils";
import { Briefcase, Linkedin, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Section from "./section";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.endsWith(path);
  return (
    <Section>
      <header className="flex gap-4 h-[8vh]">
        <div className="flex justify-start items-center flex-auto w-14 uppercase font-semibold">
          claude SDK
        </div>
        <div className="min-w-0 flex items-center justify-center">
          <nav className="flex space-x-4 items-center justify-center bg-gray-100 rounded-3xl p-1">
            <Link
              href="/"
              className={cn(
                "rounded-3xl px-6 py-1 flex items-center gap-2 transition-all duration-300",
                isActive("/") && "bg-background text-primary"
              )}
            >
              <User className="size-4" />
              About
            </Link>
            <Link
              href="/projects"
              className={cn(
                "rounded-3xl px-6 py-1 flex items-center gap-2 transition-all duration-300",
                isActive("projects") && "bg-background text-primary"
              )}
            >
              <Briefcase className="size-4" />
              Projects
            </Link>{" "}
            <Link
              href="/contact"
              className={cn(
                "rounded-3xl px-6 py-1 flex items-center gap-2 transition-all duration-300",
                isActive("contact") && "bg-background text-primary"
              )}
            >
              <Mail className="size-4" />
              Contact
            </Link>{" "}
          </nav>
        </div>
        <div className="flex flex-auto justify-end items-center space-x-4 ">
          <Button className="rounded-none w-5 h-5 p-2" size={"icon"}>
            <Link href="#linkedin">
              <Linkedin />
            </Link>
          </Button>
        </div>
      </header>
    </Section>
  );
}
