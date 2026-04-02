import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pt-20">
      <div className="container mx-auto px-8 py-16">
        <motion.h2
          className="font-display text-3xl font-bold uppercase text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Feel free to reach out for collaborations, freelance work, or just a friendly chat.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:j.martin@uptowork.com" className="text-foreground text-sm hover:text-primary transition-colors font-body">
                  j.martin@uptowork.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground text-sm font-body">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground text-sm font-body">Florida, Orlando</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-foreground text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 resize-none"
            />
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold hover:bg-primary/90 transition-colors">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
