// src/components/ProjectCard.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../data/Portfolio";

export default function ProjectCard({ project }: { project: Project }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLinkDisabled = true; // Set this to true to disable the link

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: isExpanded ? 1 : 1.05 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`bg-card rounded-lg overflow-hidden shadow-lg will-change-transform ${isExpanded ? "p-6" : "p-4"
                } cursor-pointer`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <motion.img
                src={project.image}
                alt={project.title}
                className={`w-full h-48 object-cover rounded-lg will-change-transform transition-all ${isExpanded ? "h-64" : ""
                    }`}
                loading="lazy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div className="mt-4 text-card-foreground">
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
                {isLinkDisabled ? (
                    <span className="text-muted-foreground font-bold flex items-center mb-4 cursor-not-allowed">
                        View Project <i className="fas fa-arrow-right ml-2"></i>
                    </span>
                ) : (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors font-bold flex items-center mb-4"
                    >
                        View Project <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                )}

                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4"
                    >
                        <h4 className="text-xl font-semibold mb-2">Project Details</h4>
                        <p className="text-muted-foreground mb-4">{project.longDescription}</p>
                        <div className="grid grid-cols-2 gap-4">
                            {project.screenshots?.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Screenshot ${index + 1}`}
                                    className="rounded-lg shadow-md"
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}