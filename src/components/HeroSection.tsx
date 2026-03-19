import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/data/products";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
  >
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
     style={{ backgroundImage: "url('/hero.png')" }}
    />
    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative z-10 text-center px-4 max-w-3xl"
    >
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4">
        Dhanamma Food's
      </h1>
      <p className="text-white/90 text-lg sm:text-xl font-body mb-8 max-w-xl mx-auto">
        Homemade Telugu Pindi Vantalu · Pure Ghee · Authentic Taste
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#menu"
          className="bg-primary text-primary-foreground rounded-full h-12 px-8 inline-flex items-center justify-center text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          View Menu
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white rounded-full h-12 px-8 inline-flex items-center justify-center text-sm font-semibold hover:bg-white/10 transition-colors"
        >
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
