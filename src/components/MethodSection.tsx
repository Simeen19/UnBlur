import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Route, Users, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Identify Your Passion",
    description: "Discover what truly drives you through guided self-reflection and expert assessments.",
    icon: Compass,
    bgClass: "bg-unblur-lavender/30",
    borderClass: "border-unblur-lavender/50",
    iconBg: "bg-unblur-lavender",
  },
  {
    number: "02",
    title: "Provide a Clear Path Forward",
    description: "Get a personalized roadmap with actionable steps tailored to your unique goals and timeline.",
    icon: Route,
    bgClass: "bg-unblur-bright/20",
    borderClass: "border-unblur-bright/40",
    iconBg: "bg-unblur-bright",
  },
  {
    number: "03",
    title: "Connect With Industry Experts",
    description: "Learn directly from mentors and professionals through the UnBlur Spotlight Podcast and expert sessions.",
    icon: Users,
    bgClass: "bg-unblur-deep/80",
    borderClass: "border-unblur-bright/30",
    iconBg: "bg-unblur-bright",
    isDark: true,
    hasPodcast: true,
  },
];

const MethodSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-unblur-lavender/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-unblur-bright/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-unblur-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            The UnBlur Method
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Three Steps to <span className="gradient-text">Clarity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven framework helps you move from confusion to confidence in your career journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 border ${step.bgClass} ${step.borderClass} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-elevated group`}
            >
              {/* Step number */}
              <span className={`text-6xl font-display font-bold ${step.isDark ? 'text-unblur-bright/20' : 'text-unblur-primary/20'} absolute top-4 right-6`}>
                {step.number}
              </span>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-7 h-7 ${step.isDark ? 'text-unblur-deep' : 'text-primary-foreground'}`} />
              </div>

              <h3 className={`text-2xl font-display font-bold mb-4 ${step.isDark ? 'text-primary-foreground' : 'text-foreground'}`}>
                {step.title}
              </h3>
              
              <p className={`${step.isDark ? 'text-primary-foreground/80' : 'text-muted-foreground'} leading-relaxed`}>
                {step.description}
              </p>

              {/* Podcast preview for step 3 */}
              {step.hasPodcast && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8 }}
                  className="mt-6 p-4 rounded-2xl bg-unblur-bright/10 border border-unblur-bright/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-unblur-bright flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-unblur-deep" />
                    </div>
                    <div>
                      <p className="text-primary-foreground/90 font-semibold text-sm">UnBlur Spotlight Podcast</p>
                      <p className="text-primary-foreground/60 text-xs">Real stories from industry leaders</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
