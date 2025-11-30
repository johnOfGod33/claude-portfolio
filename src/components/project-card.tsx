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
      } p-4 gap-4`}
    >
      <ItemMedia>
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-white/50">
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
      <ItemContent className="flex flex-col justify-between">
        <div>
          <ItemTitle className="text-xl font-bold leading-tight mb-2">
            {project.title}
          </ItemTitle>
          <ItemDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {project.description}
          </ItemDescription>
        </div>
      </ItemContent>
      <ItemActions className="flex items-center">
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
    </Item>
  );
}
