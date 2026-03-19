import { useState } from "react";
import { motion } from "framer-motion";

const trackingSteps = [
  { label: "Order Received", icon: "✅" },
  { label: "Being Prepared", icon: "👨‍🍳" },
  { label: "Packed", icon: "📦" },
  { label: "Shipped", icon: "🚚" },
  { label: "Delivered", icon: "🎉" },
];

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = () => {
    if (!orderId.trim()) return;
    setLoading(true);
    setCurrentStep(null);
    setTimeout(() => {
      setLoading(false);
      setCurrentStep(2); // Demo: always show "Packed" as current
    }, 600);
  };

  return (
    <section id="tracking" className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Track Your Order</h2>
        <p className="text-muted-foreground mb-8 text-sm">Enter your order ID to check the status</p>

        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter your Order ID"
            className="flex-1 h-12 px-4 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            onKeyDown={(e) => e.key === "Enter" && handleTrack()}
          />
          <button
            onClick={handleTrack}
            disabled={loading}
            className="bg-primary text-primary-foreground rounded-xl h-12 px-6 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? (
              <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
            ) : "Track"}
          </button>
        </div>

        {currentStep !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left space-y-0"
          >
            {trackingSteps.map((step, i) => {
              const done = i <= currentStep;
              const isCurrent = i === currentStep;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                      done ? "bg-whatsapp text-white" : "bg-secondary text-muted-foreground"
                    } ${isCurrent ? "ring-4 ring-whatsapp/20" : ""}`}>
                      {step.icon}
                    </div>
                    {i < trackingSteps.length - 1 && (
                      <div className={`w-0.5 h-8 ${done ? "bg-whatsapp" : "bg-secondary"}`} />
                    )}
                  </div>
                  <div className="pt-2">
                    <span className={`text-sm font-semibold ${done ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.label}
                    </span>
                    {isCurrent && <span className="ml-2 text-xs text-whatsapp font-medium">← Current</span>}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OrderTracking;
