import { Project } from "@/app/projects/project";
import { Button } from "@/src/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/src/components/ui/item";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Convert color classes to dark mode compatible versions
  const getCardColor = () => {
    if (!project.color) return "bg-card";

    // Map light colors to dark mode equivalents
    const colorMap: Record<string, string> = {
      "bg-blue-50": "bg-blue-50/90 dark:bg-blue-950/50 dark:border-blue-800/40",
      "bg-green-50":
        "bg-green-50/90 dark:bg-green-950/50 dark:border-green-800/40",
      "bg-orange-50":
        "bg-orange-50/90 dark:bg-orange-950/50 dark:border-orange-800/40",
    };

    return colorMap[project.color] || "bg-card";
  };

  return (
    <Item
      className={`h-full overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300 ${getCardColor()} p-4 md:p-6 gap-4 md:gap-6 flex-col md:flex-row`}
    >
      <ItemMedia className="w-full md:w-auto">
        <div className="relative w-full md:w-40 md:h-40 h-48 md:shrink-0 overflow-hidden rounded-lg bg-background/50 dark:bg-card/50 shadow-md border-2 border-border/50 dark:border-border ring-1 ring-black/5 dark:ring-white/5">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
              No Image
            </div>
          )}
        </div>
      </ItemMedia>
      <ItemContent className="flex flex-col justify-between w-full">
        <div>
          <ItemTitle className="text-lg md:text-xl font-bold leading-tight mb-2 md:mb-3">
            {project.title}
          </ItemTitle>
          <ItemDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </ItemDescription>
        </div>
        <ItemActions className="flex items-center mt-4 md:mt-0">
          <Button
            asChild
            variant="link"
            className="p-0 h-auto font-semibold text-foreground hover:no-underline group"
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Voir le projet
              <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </Button>
        </ItemActions>
      </ItemContent>
    </Item>
  );
}
