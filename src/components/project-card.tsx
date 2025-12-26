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
  return (
    <Item
      className={`h-full overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow duration-300 ${
        project.color || "bg-gray-50"
      } p-4 md:p-6 gap-4 md:gap-6 flex-col md:flex-row`}
    >
      <ItemMedia className="w-full md:w-auto">
        <div className="relative w-full md:w-40 md:h-40 h-48 md:shrink-0 overflow-hidden rounded-lg bg-white/50 shadow-md border-2 border-white/80 ring-1 ring-black/5">
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
