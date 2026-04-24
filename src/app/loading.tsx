"use client"

import { motion } from "framer-motion"

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#0d1117] opacity-60" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Animated Monogram */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-6xl font-black font-mono text-accent select-none mb-8"
                >
                    BB
                </motion.div>

                {/* Minimal Progress Bar */}
                <div className="w-48 h-[2px] bg-border rounded-full overflow-hidden relative">
                    <motion.div
                        animate={{
                            x: ["-100%", "100%"]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-0 bg-accent w-1/2"
                    />
                </div>

                <p className="mt-4 text-xs font-mono uppercase tracking-[0.3em] text-text-muted">
                    Brewing interface
                </p>
            </div>
        </div>
    )
}
