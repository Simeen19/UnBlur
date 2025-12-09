import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ChevronLeft, ChevronRight, Youtube, Instagram, Headphones } from "lucide-react";

const episodes = [
  {
    id: 1,
    title: "Breaking Into Tech Without a CS Degree",
    guest: "Sarah Chen",
    role: "Senior Engineer at Stripe",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    title: "From Corporate to Startup: Making the Leap",
    guest: "Marcus Johnson",
    role: "Founder, TechStart Labs",
    duration: "52 min",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Building Your Personal Brand Online",
    guest: "Emma Rodriguez",
    role: "Content Creator & Coach",
    duration: "38 min",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    title: "The Art of Career Pivoting",
    guest: "David Kim",
    role: "Career Transition Expert",
    duration: "41 min",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const PodcastSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % episodes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + episodes.length) % episodes.length);
  };

  const featuredEpisode = episodes[currentIndex];

  return (
    <section ref={ref} className="py-24 bg-unblur-deep relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-unblur-bright/20 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-unblur-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-unblur-lavender/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Headphones className="w-5 h-5 text-unblur-bright" />
            <span className="text-unblur-bright font-semibold text-sm tracking-wider uppercase">
              UnBlur Spotlight
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
            Real Stories. <span className="text-unblur-bright">Real Growth.</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Hear from industry leaders who've walked the path you're about to take.
          </p>
        </motion.div>

        {/* Featured Episode */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-unblur-primary/50 to-unblur-bright/20 p-1">
            <div className="rounded-3xl overflow-hidden bg-unblur-deep/90 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center gap-8 p-8">
                {/* Episode Image */}
                <motion.div
                  key={featuredEpisode.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-glow-lg">
                    <img
                      src={featuredEpisode.image}
                      alt={featuredEpisode.guest}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center bg-unblur-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-unblur-bright flex items-center justify-center">
                      <Play className="w-8 h-8 text-unblur-deep fill-current ml-1" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Episode Info */}
                <motion.div
                  key={`info-${featuredEpisode.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 text-center md:text-left"
                >
                  <span className="text-unblur-bright text-sm font-medium">Featured Episode</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mt-2 mb-4">
                    {featuredEpisode.title}
                  </h3>
                  <p className="text-primary-foreground/80 mb-2">
                    with <span className="text-unblur-bright font-semibold">{featuredEpisode.guest}</span>
                  </p>
                  <p className="text-primary-foreground/60 text-sm mb-6">
                    {featuredEpisode.role} • {featuredEpisode.duration}
                  </p>
                  <Button variant="glow" size="lg">
                    <Play className="w-5 h-5" />
                    Listen Now
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Episode Carousel */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-3">
            {episodes.map((episode, index) => (
              <button
                key={episode.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-unblur-bright scale-110 shadow-glow'
                    : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={episode.image}
                  alt={episode.guest}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero-outline" size="lg">
            <Youtube className="w-5 h-5" />
            Watch on YouTube
          </Button>
          <Button variant="hero-outline" size="lg">
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastSection;
