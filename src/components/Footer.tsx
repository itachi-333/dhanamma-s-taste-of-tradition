import { getWhatsAppLink } from "@/data/products";

const Footer = () => (
  <footer className="bg-footer-bg text-footer-foreground py-12 px-4">
    <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8">
      <div>
        <h3 className="font-display text-xl font-bold text-accent mb-2">Dhanamma Food's</h3>
        <p className="text-sm text-footer-foreground/70">Homemade Telugu Pindi Vantalu · Pure Ghee · Authentic Taste</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
        <div className="space-y-2 text-sm text-footer-foreground/70">
          <a href="#hero" className="block hover:text-accent transition-colors">Home</a>
          <a href="#menu" className="block hover:text-accent transition-colors">Menu</a>
          <a href="#about" className="block hover:text-accent transition-colors">About</a>
          <a href="#tracking" className="block hover:text-accent transition-colors">Track Order</a>
          <a href="#faq" className="block hover:text-accent transition-colors">FAQ</a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-3 text-sm">Contact</h4>
        <div className="space-y-2 text-sm text-footer-foreground/70">
          <a href="tel:+917799186907" className="block hover:text-accent transition-colors">📞 7799186907</a>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">💬 WhatsApp</a>
          <a href="https://www.instagram.com/ruchi_pandiri" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition-colors">📸 Instagram</a>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-footer-foreground/10 text-center text-xs text-footer-foreground/50">
      © 2025 Dhanamma Food's. Homemade with ❤️
    </div>
  </footer>
);

export default Footer;
