import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-unblur-primary/5 via-background to-unblur-bright/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-unblur-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              The Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              UnBlur Your <span className="gradient-text">Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We combine personalized guidance, expert mentorship, and practical tools to help you 
              navigate your career with confidence. No more guessing—just clear, actionable steps forward.
            </p>

            <div className="space-y-6">
              {[
                { icon: Target, title: "Personalized Roadmaps", desc: "Custom action plans tailored to your unique goals" },
                { icon: Sparkles, title: "Expert Guidance", desc: "Learn from professionals who've been where you want to go" },
                { icon: Zap, title: "Rapid Progress", desc: "See real results within weeks, not years" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-unblur-lavender/30 flex items-center justify-center flex-shrink-0 group-hover:bg-unblur-lavender/50 transition-colors">
                    <item.icon className="w-6 h-6 text-unblur-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-unblur-primary font-semibold hover:gap-4 transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="rounded-3xl overflow-hidden shadow-elevated">
                <div className="aspect-[4/3] bg-gradient-to-br from-unblur-primary via-unblur-lavender to-unblur-bright p-8 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6"
                    >
                      <Sparkles className="w-12 h-12" />
                    </motion.div>
                    <h3 className="text-2xl font-display font-bold mb-2">Your Path Awaits</h3>
                    <p className="text-primary-foreground/80">Clear vision. Bold action. Real results.</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl bg-unblur-bright/20 backdrop-blur-sm border border-unblur-bright/30"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-unblur-lavender/20 backdrop-blur-sm border border-unblur-lavender/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
