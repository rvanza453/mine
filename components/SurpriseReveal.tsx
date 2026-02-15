"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SurpriseProps {
    question?: string;
    answer?: string;
    emoji?: string;
}

export default function SurpriseReveal({
    question = "Click to reveal",
    answer = "Surprise!",
    emoji = "✨"
}: SurpriseProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-8 flex justify-center w-full">
            <div className="relative w-full max-w-sm cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-center shadow-xl"
                        >
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-4xl mb-3"
                            >
                                {emoji}
                            </motion.div>
                            <p className="text-gray-300 font-serif italic text-lg">{question}</p>
                            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">Tap to open</p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0.9, opacity: 0, rotateX: 90 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md border border-pink-500/30 p-6 rounded-xl text-center shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                        >
                            <p className="text-white font-medium text-lg leading-relaxed font-serif">
                                "{answer}"
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
