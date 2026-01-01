// app/projects/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
      <p className="text-gray-600 mt-2">A selection of things I've built. More coming soon!</p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}