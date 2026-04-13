import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Contact = ({ id = "contact" }) => {
  return (
    <section id={id} className="min-h-screen pt-20 scroll-mt-28">
      <div className="container mx-auto px-8 py-16">
        <motion.h2
          className="font-display text-3xl font-bold uppercase text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-muted-foreground font-body text-sm leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Want to collaborate or have a project in mind? Send a message and I’ll get back to you.
        </motion.p>

        <div className="mt-10 grid gap-4 max-w-xl">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-body text-foreground hover:border-foreground/30 transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">hello@example.com</span>
          </a>

          <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-body text-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <div className="leading-tight">
              <div className="text-muted-foreground">Khubi, Karad</div>
              <div className="text-muted-foreground text-xs">Maharashtra 415-108</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
