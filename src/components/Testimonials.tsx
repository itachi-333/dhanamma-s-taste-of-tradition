import { motion } from "framer-motion";

const reviews = [
  { text: "The Ariselu and Bobbatlu are exactly like my grandmother used to make! Pure ghee taste is unbeatable.", name: "Priya M.", city: "Hyderabad" },
  { text: "Ordered for Sankranti gifts. Everyone loved the packing and the sweets were so fresh!", name: "Ravi K.", city: "Bangalore" },
  { text: "The Dry Fruit Laddu is worth every rupee. Hygienic packing, fast delivery. Highly recommended!", name: "Swetha R.", city: "Chennai" },
];

const Testimonials = () => (
  <section className="py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">What Our Customers Say</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card p-6 rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05)]"
          >
            <div className="text-accent mb-3 text-lg">★★★★★</div>
            <p className="text-sm text-foreground leading-relaxed mb-4">"{r.text}"</p>
            <div className="text-sm font-semibold text-foreground">{r.name}</div>
            <div className="text-xs text-muted-foreground">{r.city}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
