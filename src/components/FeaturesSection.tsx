import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Users, FileText, MessageCircle, Newspaper, ClipboardList } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Clarity Sessions",
    description: "1-on-1 video calls with career experts to map your unique path forward.",
    variant: "lavender",
  },
  {
    icon: Users,
    title: "Workshops",
    description: "Interactive group sessions on skills, networking, and career growth.",
    variant: "bright",
  },
  {
    icon: FileText,
    title: "Toolkits",
    description: "Downloadable resources, templates, and guides for every career stage.",
    variant: "lavender",
  },
  {
    icon: MessageCircle,
    title: "Community",
    description: "Connect with like-minded peers on the same journey to success.",
    variant: "bright",
  },
  {
    icon: Newspaper,
    title: "UnBlur Bytes",
    description: "Bite-sized insights and tips delivered to your inbox weekly.",
    variant: "lavender",
  },
  {
    icon: ClipboardList,
    title: "Custom Action Plans",
    description: "Personalized roadmaps with milestones and accountability check-ins.",
    variant: "bright",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-unblur-lavender/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-unblur-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete ecosystem designed to accelerate your career journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`h-full rounded-3xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer ${
                  feature.variant === "lavender"
                    ? "bg-unblur-lavender/10 border-unblur-lavender/30 hover:bg-unblur-lavender/20"
                    : "bg-unblur-bright/10 border-unblur-bright/30 hover:bg-unblur-bright/20"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                    feature.variant === "lavender"
                      ? "bg-unblur-lavender"
                      : "bg-unblur-bright"
                  }`}
                >
                  <feature.icon className="w-7 h-7 text-unblur-deep" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
