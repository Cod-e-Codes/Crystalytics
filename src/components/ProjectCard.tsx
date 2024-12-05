// src/components/ProjectCard.tsx
import { motion } from "framer-motion";
import { Project } from "../data/Portfolio";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-card rounded-lg overflow-hidden shadow-lg will-change-transform"
        >
            <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover will-change-transform"
                loading="lazy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div className="p-6 text-card-foreground">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm hover:bg-secondary-hover transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={project.link}
                    className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center"
                >
                    View Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </motion.div>
    );
}
