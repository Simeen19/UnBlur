import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const comparisons = [
  {
    aspect: "Guidance",
    us: "Personalized 1-on-1 sessions with industry experts",
    them: "Generic online courses with no interaction",
  },
  {
    aspect: "Timeline",
    us: "Clear milestones with accountability check-ins",
    them: "Self-paced with no structure or deadlines",
  },
  {
    aspect: "Network",
    us: "Direct access to mentors and a thriving community",
    them: "Learn alone with no networking opportunities",
  },
  {
    aspect: "Results",
    us: "Measurable progress within weeks",
    them: "Vague outcomes with no tracking",
  },
];

const WhyDifferentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-unblur-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            The Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Why UnBlur <span className="gradient-text">Stands Out</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just another career platform. Here's what makes us different.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="grid md:grid-cols-3 gap-4 items-stretch"
            >
              {/* Aspect Label */}
              <div className="flex items-center justify-center md:justify-end">
                <span className="text-lg font-display font-bold text-foreground bg-unblur-lavender/20 px-6 py-3 rounded-xl">
                  {item.aspect}
                </span>
              </div>

              {/* UnBlur */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-6 border-2 border-unblur-bright/30 hover:border-unblur-bright/60 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-unblur-bright uppercase tracking-wider">UnBlur</span>
                    <p className="text-foreground mt-1">{item.us}</p>
                  </div>
                </div>
              </motion.div>

              {/* Others */}
              <div className="rounded-2xl p-6 bg-muted/50 border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Others</span>
                    <p className="text-muted-foreground mt-1">{item.them}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
