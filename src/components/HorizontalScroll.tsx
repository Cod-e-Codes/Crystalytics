import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { skills, certifications, projects } from '../data/Portfolio';
import ProjectCard from './ProjectCard';
import crystalCartoon1 from './crystal-cartoon-1.png';
import crystalCartoon2 from './crystal-cartoon-2.png';

const HorizontalScroll: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const pinWrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current && pinWrapRef.current) {
                const section = sectionRef.current;
                const pinWrap = pinWrapRef.current;

                const scrollY = window.scrollY;
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const windowHeight = window.innerHeight;

                const startScroll = sectionTop;
                const endScroll = sectionTop + sectionHeight - windowHeight;
                const scrollProgress = (scrollY - startScroll) / (endScroll - startScroll);

                const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

                const totalScrollWidth = pinWrap.scrollWidth - window.innerWidth;

                pinWrap.style.transform = `translateX(-${clampedProgress * totalScrollWidth}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const totalSections = 3 + projects.length;

    return (
        <section id="sectionPin" ref={sectionRef} style={{ height: `${totalSections * 100}vh` }} className="relative">
            <div className="pin-wrap-sticky h-screen w-screen overflow-hidden">
                <div ref={pinWrapRef} className="pin-wrap flex h-full w-auto">
                    {/* About Me Section */}
                    <div className="flex-shrink-0 px-4 lg:px-8 py-12 w-auto max-w-lg lg:max-w-3xl flex flex-col lg:flex-row items-center justify-center bg-background text-foreground gap-8">
                        <img
                            src={crystalCartoon1}
                            alt="Crystal Cartoon 1"
                            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover"
                        />
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-4">About Me</h2>
                            <p className="text-lg lg:text-xl leading-relaxed">
                                Hi, I'm <span className="font-semibold text-primary">Crystal Ryals</span>—a passionate Data Analyst with expertise in uncovering
                                insights through data visualization, statistical analysis, and storytelling. My goal is to help organizations make informed, data-driven
                                decisions.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="flex-shrink-0 px-4 lg:px-8 py-12 w-auto max-w-lg lg:max-w-3xl flex flex-col items-center justify-center bg-card text-card-foreground gap-8">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">Skills</h2>
                        <div className="w-full">
                            {skills.map((skill) => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2">
                                            {skill.icon.startsWith('fa') ? (
                                                <i className={`${skill.icon} text-lg`} style={{ color: skill.color }}></i>
                                            ) : (
                                                <img src={skill.icon} alt={skill.name} className="w-6 h-6" style={{ color: skill.color }} />
                                            )}
                                            <span>{skill.name}</span>
                                        </div>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="h-2 bg-muted rounded-full">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1 }}
                                            viewport={{ once: true, amount: 0.5 }} // Animation triggers when 50% of the section is visible
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: skill.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="flex-shrink-0 px-4 lg:px-8 py-12 w-auto max-w-lg lg:max-w-3xl flex flex-col lg:flex-row items-center justify-center bg-secondary text-secondary-foreground gap-8">
                        <img
                            src={crystalCartoon2}
                            alt="Crystal Cartoon 2"
                            className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover"
                        />
                        <div className="text-left">
                            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Certifications</h2>
                            <div>
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        className="border-l-2 border-primary pl-4 mb-4"
                                    >
                                        <h4 className="text-lg font-semibold">{cert.title}</h4>
                                        <p className="text-muted-foreground">{cert.issuingOrganization}</p>
                                        <p className="text-sm text-muted-foreground">Issued: {cert.issueDate}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Project Sections */}
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex-shrink-0 px-4 lg:px-8 py-12 w-auto max-w-lg lg:max-w-xl flex flex-col items-center justify-center bg-primary text-primary-foreground"
                        >
                            <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-center">{project.title}</h2>
                            <div className="w-full">
                                <ProjectCard project={project} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HorizontalScroll;