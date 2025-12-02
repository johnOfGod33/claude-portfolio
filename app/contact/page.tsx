import { Reveal } from "@/src/components/reveal";
import { Button } from "@/src/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-100px)] items-center justify-center text-center px-4">
      <Reveal width="100%" className="flex flex-col items-center">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Travaillons Ensemble
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Je suis toujours enthousiaste à l&apos;idée de collaborer,
            d&apos;innover et de construire des solutions significatives. Que
            vous ayez un projet, une opportunité d&apos;emploi ou que vous
            souhaitiez simplement échanger, discutons-en !
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-6 h-12 bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Link href="mailto:claudesodokin@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Me Contacter
            </Link>
          </Button>
        </div>
      </Reveal>
    </div>
  );
}
