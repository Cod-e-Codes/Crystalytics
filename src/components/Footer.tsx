import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-6">
            <div className="container mx-auto flex flex-col items-center">
                <p className="text-sm mb-4">
                    © {new Date().getFullYear()} Crystal Ryals. All rights reserved.
                </p>
                <motion.div
                    className="flex space-x-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* GitHub Link */}
                    <a
                        href="https://github.com/Goinwrong"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github text-2xl"></i>
                    </a>

                    {/* LinkedIn Link */}
                    <a
                        href="https://www.linkedin.com/in/crystal-ryals-0200aa129/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                </motion.div>
            </div>
        </footer>
    );
}
