import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is the minimum order?", a: "No minimum order. Order any item from our menu!" },
  { q: "Do you deliver outside India?", a: "Currently we deliver Pan India. International orders on request." },
  { q: "Are special/bulk orders accepted?", a: "Yes! Contact us on WhatsApp for bulk and custom orders." },
  { q: "How are products packed?", a: "All products are packed neatly and hygienically to ensure freshness during transit." },
  { q: "What is the shelf life?", a: "Most products stay fresh for 7–15 days. Pickles last up to 3 months." },
];

const FAQSection = () => (
  <section id="faq" className="py-16 px-4 bg-card">
    <div className="max-w-2xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl px-4 border border-border">
            <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
