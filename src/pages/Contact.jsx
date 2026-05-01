import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.13, duration: 0.7, ease: "easeOut" },
  }),
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    background: "hsl(200 40% 97%)",
    border: "1.5px solid hsl(200 30% 86%)",
    borderRadius: "1rem",
    padding: "0.875rem 1.125rem",
    width: "100%",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    color: "hsl(200 30% 25%)",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "hsl(195 35% 95%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-72 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, hsl(185 65% 60% / 0.1), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <p className="text-xs font-body font-semibold tracking-widest uppercase mb-3" style={{ color: "hsl(200 70% 45%)" }}>
            Get in touch
          </p>
          <h2
            className="font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl leading-none"
            style={{
              background: "linear-gradient(135deg, hsl(200 80% 22%), hsl(190 65% 42%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CONTACT
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left — Info */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: "linear-gradient(135deg, hsl(200 80% 35% / 0.06), hsl(185 65% 55% / 0.04))",
                border: "1.5px solid hsl(200 60% 75% / 0.3)",
              }}
            >
              <p className="font-body text-base sm:text-lg leading-relaxed mb-6" style={{ color: "hsl(200 15% 40%)" }}>
                Feel free to reach out for collaborations, freelance work, or just a friendly chat.
                I'm always open to new opportunities and ideas.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, text: "sanketsutar010@gmail.com", href: "mailto:sanketsutar010@gmail.com" },
                  { icon: MapPin, text: "Khubi, Karad, Maharashtra", href: null },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "hsl(200 80% 35% / 0.1)",
                        border: "1px solid hsl(200 70% 55% / 0.2)",
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "hsl(200 70% 38%)" }} />
                    </div>
                    {href ? (
                      <a href={href} className="font-body text-sm font-medium" style={{ color: "hsl(200 50% 38%)" }}>
                        {text}
                      </a>
                    ) : (
                      <span className="font-body text-sm font-medium" style={{ color: "hsl(200 20% 45%)" }}>{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative quote */}
            <div
              className="rounded-2xl px-6 py-4"
              style={{
                background: "hsl(200 80% 35% / 0.05)",
                borderLeft: "3px solid hsl(200 70% 48%)",
              }}
            >
              <p className="font-body text-sm italic" style={{ color: "hsl(200 30% 50%)" }}>
                "Great design is not just what it looks like — it's how it works and feels."
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form onSubmit={submit} className="space-y-4">
              {[
                { name: "name", placeholder: "Your Name", type: "text" },
                { name: "email", placeholder: "Your Email", type: "email" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handle}
                  required
                  style={inputStyle}
                  onFocus={e => {
                    e.target.style.borderColor = "hsl(200 70% 50%)";
                    e.target.style.boxShadow = "0 0 0 3px hsl(200 80% 50% / 0.12)";
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = "hsl(200 30% 86%)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              ))}

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handle}
                required
                rows={6}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => {
                  e.target.style.borderColor = "hsl(200 70% 50%)";
                  e.target.style.boxShadow = "0 0 0 3px hsl(200 80% 50% / 0.12)";
                }}
                onBlur={e => {
                  e.target.style.borderColor = "hsl(200 30% 86%)";
                  e.target.style.boxShadow = "none";
                }}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-2xl font-body font-bold text-white flex items-center justify-center gap-3 transition-all duration-300"
                style={{
                  background: sent
                    ? "linear-gradient(135deg, hsl(145 60% 38%), hsl(160 55% 45%))"
                    : "linear-gradient(135deg, hsl(200 80% 32%), hsl(183 65% 48%))",
                  boxShadow: sent
                    ? "0 6px 24px hsl(145 60% 38% / 0.3)"
                    : "0 6px 24px hsl(200 80% 40% / 0.3)",
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mt-20 pt-8"
        style={{ borderTop: "1px solid hsl(200 30% 86%)" }}
      >
        <p className="font-body text-sm" style={{ color: "hsl(200 20% 55%)" }}>
          © 2024 <span style={{ color: "hsl(200 70% 40%)" }} className="font-semibold">Sanket Sutar</span>. Designed & Built with passion.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
