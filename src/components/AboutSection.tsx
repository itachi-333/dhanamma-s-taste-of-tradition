import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-16 px-4 bg-card">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Made with Love, Packed with Tradition
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Dhanamma Food's brings you authentic Telugu Pindi Vantalu made at home with Pure Ghee and traditional recipes passed down through generations. Every bite is a taste of home.
        </p>
        <div className="flex gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary font-display">100%</div>
            <div className="text-xs text-muted-foreground">Handmade</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary font-display">Pure</div>
            <div className="text-xs text-muted-foreground">Ghee</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary font-display">Pan India</div>
            <div className="text-xs text-muted-foreground">Delivery</div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
          alt="Traditional cooking"
          className="w-full h-80 object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
