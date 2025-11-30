import { ProjectCard } from "@/src/components/project-card";
import { Reveal } from "@/src/components/reveal";
import Section from "@/src/components/section";
import { projects } from "./project";

export default function ProjectsPage() {
  //const featuredProject = projects.find((p) => p.featured) || projects[0];
  //const otherProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <Section>
      {/* Featured Project */}
      {/*       <section>
        <FeaturedProjectCard project={featuredProject} />
      </section> */}

      {/* Other Projects Grid */}
      <Reveal width="100%">
        <section className="flex flex-col gap-8">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </section>
      </Reveal>
    </Section>
  );
}
