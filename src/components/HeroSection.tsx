import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";

const FloatingShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-bg gradient-animate">
      {/* Floating Shapes */}
      <FloatingShape
        className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-unblur-bright/20 blur-3xl"
        delay={0}
      />
      <FloatingShape
        className="absolute top-40 right-[15%] w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl"
        delay={2}
      />
      <FloatingShape
        className="absolute bottom-20 left-[20%] w-80 h-80 rounded-full bg-unblur-lavender/20 blur-3xl"
        delay={4}
      />
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-32 right-[25%] w-20 h-20 border-2 border-primary-foreground/20 rounded-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 right-[10%] w-16 h-16 bg-unblur-bright/30 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] left-[5%] w-24 h-24 border border-primary-foreground/10 rounded-full"
        animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Discover Your Path Forward
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-tight"
          >
            Stop Guessing.
            <br />
            <span className="text-unblur-bright">Start Doing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-light"
          >
            UnBlur helps you find clarity in your career, connect with industry experts, 
            and take confident steps toward your passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="glow" size="xl">
              Book a Clarity Session
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="w-5 h-5" />
              Explore Podcast
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
