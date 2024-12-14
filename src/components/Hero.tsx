import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./ModelLoader"; // The component that loads your 3D model
import logo from "./logo.png";
import heroBackground from "./hero-background.png";

export default function Hero() {
    const [rotationY, setRotationY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;

            // Increase sensitivity from 0.001 to 0.005 for faster rotation
            const rotationChange = scrollDelta * 0.005;

            setRotationY((prev) => prev + rotationChange);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <section
            className="section-scroll relative overflow-hidden h-screen flex items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none"></div>

            <div className="container mx-auto px-4 flex justify-center items-center relative">
                {/* Single Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center bg-background text-foreground p-8 rounded-lg shadow-lg border-2 border-primary w-full max-w-4xl"
                >
                    {/* Left Section (Logo and Text) */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.img
                            src={logo}
                            alt="Crystalytics Logo"
                            className="w-40 md:w-56 lg:w-64 mb-6"
                        />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Turn Data Into Insights
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl mb-6">
                            Unlock the power of data visualization and analysis with Crystalytics. Transform numbers into actionable strategies.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#contact"
                                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm md:text-base lg:text-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="#learn-more"
                                className="border border-primary text-primary px-6 py-3 rounded-lg text-sm md:text-base lg:text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Section (3D Model) */}
                    <div className="flex-1 flex justify-center mt-8 md:mt-0 h-48 md:h-64 lg:h-80 w-full relative">
                        <Canvas
                            className="w-full h-full"
                            camera={{ position: [0, 0, 4] }} // Move camera slightly closer
                        >
                            <ambientLight intensity={1.5} />
                            <directionalLight position={[0, 5, 5]} intensity={2} />
                            <Model rotationY={rotationY} />
                        </Canvas>
                    </div>
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
