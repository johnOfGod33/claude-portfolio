import { Project } from "@/app/projects/project";
import { Button } from "@/src/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectCardProps {
  project: Project;
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <div className="bg-[#0f172a] text-white rounded-3xl overflow-hidden shadow-xl">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[400px]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
          {/* Overlay gradient if needed */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0f172a]/80 to-transparent md:hidden" />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center md:w-1/2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold leading-tight">
              {project.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#6366f1] hover:bg-[#4f46e5] text-white border-none"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-4 h-4 mr-2 fill-current" />
                Voir les applications Beta
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-white hover:text-gray-200 hover:bg-white/10 rounded-full"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir {project.title.split(" ")[0]}
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
