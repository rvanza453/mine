"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { memories, Memory } from "./data/memories";
import BackgroundMusic from "@/components/BackgroundMusic";
import SurpriseReveal from "@/components/SurpriseReveal";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startJourney = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }
    setIsStarted(true);
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <audio ref={audioRef} src="/valentine-special/assets/mp3/music.mp3" loop hidden />

      {isStarted && <BackgroundMusic audioRef={audioRef} />}

      {!isStarted && (
        <div
          onClick={startJourney}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black cursor-pointer"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="text-gray-400 tracking-[0.3em] text-sm md:text-base uppercase text-center px-4 leading-loose"
          >
            Click anywhere to start our screen
          </motion.h1>
        </div>
      )}

      {isStarted && (
        <>
          <HeroSection />
          <div className="flex flex-col gap-20 md:gap-32 pb-32">
            {memories.map((memory, index) => (
              <div key={index}>
                <ChapterSection data={memory} index={index} />
                {memory.surprise && (
                  <SurpriseReveal
                    question={memory.surprise.question}
                    answer={memory.surprise.answer}
                    emoji={memory.surprise.emoji}
                  />
                )}
              </div>
            ))}
          </div>
          <FinalPledge />
        </>
      )}
    </main>
  );
}

function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="z-10"
      >
        <h1 className="font-serif text-6xl md:text-9xl mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
          Us.
        </h1>
        <p className="text-gray-500 tracking-[0.3em] text-xs md:text-sm uppercase">
          Scroll slowly, For our Story
        </p>
      </motion.div>


      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black pointer-events-none" />
    </section>
  );
}

function ChapterSection({ data, index }: { data: Memory, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const hasText = data.title || data.text;

  return (
    <section ref={ref} className={`min-h-[50vh] md:min-h-screen flex flex-col md:flex-row items-center justify-center py-10 px-6 gap-8 md:gap-24 ${!hasText ? 'justify-center' : ''}`}>


      {hasText && (
        <div className={`flex-1 max-w-md ${index % 2 === 1 ? "md:order-2" : ""}`}>
          {data.title && (
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 text-gray-100"
            >
              {data.title}
            </motion.h2>
          )}
          {data.text && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gray-400 text-base md:text-xl leading-relaxed font-light"
            >
              {data.text}
            </motion.p>
          )}
        </div>
      )}


      <div className={`flex-1 w-full ${hasText ? 'max-w-md' : 'max-w-4xl'} aspect-[3/4] md:aspect-[4/5] relative overflow-hidden bg-gray-900/50 rounded-xl shadow-2xl border border-white/5`}>
        {data.type === 'video' ? (
          <motion.video
            initial={{ opacity: 0, scale: 1.1 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.5 }}
            src={data.src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={data.src}
            alt={data.title || "Our Memory"}
            className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-700"
          />
        )}
      </div>
    </section>
  );
}

function FinalPledge() {
  const sentence = "I  Love  You  More  Than  Words".split("  ");

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
      <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-2 max-w-5xl z-10">
        {sentence.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className={`font-serif text-3xl md:text-7xl font-bold ${['Love', 'You'].includes(word) ? 'text-rose-500' : 'text-white'}`}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="mt-16 md:mt-24 text-gray-500 text-[10px] md:text-xs tracking-[0.5em] uppercase"
      >
        Happy Valentine's Day
      </motion.div>
    </section>
  );
}