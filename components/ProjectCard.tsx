// components/ProjectCard.tsx
import Image from "next/image";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.link}
      target="_blank"
      className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 dark:border-gray-700 dark:hover:border-gray-600"
    >
      {/* Project Image */}
      <div className="h-48 bg-gray-100 relative overflow-hidden dark:bg-gray-800">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-103 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-500 transition-colors dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed dark:text-gray-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}