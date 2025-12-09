import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingDown, Clock, HelpCircle, Frown } from "lucide-react";

const stats = [
  { value: 73, suffix: "%", label: "of young adults feel lost in their career", icon: HelpCircle },
  { value: 2.5, suffix: " years", label: "average time wasted on wrong career paths", icon: Clock },
  { value: 65, suffix: "%", label: "regret not seeking guidance earlier", icon: Frown },
  { value: 8, suffix: "/10", label: "wish they had a mentor starting out", icon: TrendingDown },
];

const CountUp = ({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
};

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-unblur-primary" />
        <div className="absolute top-40 right-[20%] w-3 h-3 rounded-full bg-unblur-lavender" />
        <div className="absolute bottom-20 left-[30%] w-2 h-2 rounded-full bg-unblur-bright" />
        <div className="absolute bottom-40 right-[15%] w-4 h-4 rounded-full bg-unblur-primary/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-unblur-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            The Reality
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Feeling <span className="gradient-text">Blurred?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            You're not alone. Millions struggle with career uncertainty every day.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 text-center h-full hover:scale-105 transition-all duration-300 hover:shadow-glow">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring" }}
                  className="w-14 h-14 rounded-2xl bg-unblur-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-unblur-primary/20 transition-colors"
                >
                  <stat.icon className="w-7 h-7 text-unblur-primary" />
                </motion.div>
                <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
