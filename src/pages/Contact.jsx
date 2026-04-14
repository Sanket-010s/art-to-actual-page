import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

const Contact = ({ id = "contact" }) => {
  return (
    <section id="contact" className="py-32 page-padding">
        <div className="container mx-auto px-10 lg:px-16">
          <motion.h2 className="section-title mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Contact
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="glass-card p-12">
                <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
                  Feel free to reach out for collaborations, freelance work, or just a friendly chat. I'm always open to new opportunities and ideas.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-base">
                    <Mail className="w-6 h-6 text-primary shrink-0" />
                    <a href="mailto:sanketsutar010@gmail.com" className="hover:text-primary transition-colors font-medium">sanketsutar010@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground text-base">
                    <MapPin className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-medium">Khubi, Karad, Maharashtra</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="glass-card p-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" className="w-full px-8 py-5 rounded-xl bg-muted/50 border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/60 transition-all" />
              <input type="email" placeholder="Your Email" className="w-full px-8 py-5 rounded-xl bg-muted/50 border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/60 transition-all" />
              <textarea placeholder="Your Message" rows={6} className="w-full px-8 py-5 rounded-xl bg-muted/50 border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none placeholder:text-muted-foreground/60 transition-all" />
              <button type="submit" className="w-full px-12 py-5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold text-lg hover:from-primary/90 hover:to-accent/90 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
  );
};

export default Contact;

