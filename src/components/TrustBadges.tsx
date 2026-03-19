import { motion } from "framer-motion";

const badges = [
  { icon: "🎁", text: "Neat & Hygienic Packing" },
  { icon: "🍽️", text: "Fresh Traditional Snacks" },
  { icon: "✅", text: "Special Orders Accepted" },
  { icon: "💰", text: "Good Quality at Best Prices" },
];

const TrustBadges = () => (
  <section className="bg-card border-y border-border">
    <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-3 justify-center text-center"
        >
          <span className="text-2xl">{b.icon}</span>
          <span className="text-sm font-medium text-foreground">{b.text}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustBadges;
