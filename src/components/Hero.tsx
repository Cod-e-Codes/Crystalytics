import { motion } from "framer-motion";
import logo from "./logo.png"; // Import the logo
import dataAnalysisImage from "./wordcloud.png"; // Import the word cloud image

export default function Hero() {
    return (
        <section className="section-scroll relative overflow-hidden h-screen flex items-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Left Content (Logo and Button) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col items-center"
                >
                    <motion.img
                        src={logo} // Use the imported logo variable
                        alt="Crystalytics Logo"
                        className="w-64 md:w-96 lg:w-[500px]"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                    >
                        <a
                            href="#contact"
                            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Content (Word Cloud Image) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center"
                >
                    <motion.img
                        src={dataAnalysisImage}
                        alt="Data Analysis Word Cloud"
                        className="w-64 md:w-96 lg:w-[500px] rounded-lg"
                    />
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-6 w-full flex justify-center">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex flex-col items-center"
                >
                    <span className="block text-muted-foreground text-sm mb-2">
                        Scroll Down
                    </span>
                    <div className="w-6 h-6 border-2 border-primary rounded-full flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-2 h-2 bg-primary rounded-full"
                        ></motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
