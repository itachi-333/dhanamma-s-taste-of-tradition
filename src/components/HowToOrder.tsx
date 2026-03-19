import { motion } from "framer-motion";

const steps = [
  { icon: "📋", title: "Browse Menu", desc: "Choose your favourite items from our menu" },
  { icon: "💬", title: "WhatsApp Us", desc: "Send your order to 7799186907" },
  { icon: "🚚", title: "Get Delivered", desc: "Pan India delivery in 2–7 days" },
];

const HowToOrder = () => (
  <section className="py-16 px-4 bg-card">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12">How to Order</h2>
      <div className="grid sm:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-5xl">{s.icon}</span>
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg font-body">{i + 1}</div>
            <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToOrder;
