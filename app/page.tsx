import { Reveal } from "@/src/components/reveal";
import { TechStack } from "@/src/components/tech-stack";
import { Button } from "@/src/components/ui/button";
import { Download, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-20 text-center space-y-8 container mx-auto px-4">
        <Reveal width="100%">
          <div className="flex flex-col items-center space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Hey, Je suis Claude SODOKIN
              </h1>
              <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
                Technicien Génie Civil & Structure | Gestion de Projets
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Je conçois et dimensionne des structures fiables et durables,
                tout en assurant une gestion de projet efficace : du calcul
                technique au devis final, je transforme vos idées en ouvrages
                maîtrisés et prêts à construire.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Link href="/projects">
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Voir mes projets
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6"
              >
                <Link href="/resume.pdf" target="_blank" download={true}>
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger mon CV
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* What I Do Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-8">
          <Reveal width="100%">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl font-bold">What I do</h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-justify">
                Technicien en génie civil passionné par le dimensionnement
                structurel et la gestion complète de projets de construction,
                j’accompagne les architectes, particuliers et promoteurs
                immobiliers dans la conception, l’analyse et la réalisation de
                leurs ouvrages.
                <br />
                <br />
                Grâce à une approche rigoureuse, je vous aide à concevoir des
                structures stables, économiques et conformes aux normes,
                réaliser des études de structures détaillées (béton, acier,
                bois), produire des plans techniques précis et gérer
                efficacement chaque phase du projet.
                <br />
                <br />
                Mon objectif est de garantir des projets bien dimensionnés, bien
                organisés et bien budgétisés, du concept jusqu’à la réalisation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech Stack Section */}
      <Reveal width="100%">
        <TechStack />
      </Reveal>
    </div>
  );
}
