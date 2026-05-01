// src/pages/MainPage.jsx  — Replace your existing App or root layout with this
// Make sure your App.jsx renders <MainPage /> or place this content in App.jsx

import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievement from "@/components/Achievement";
import Contact from "@/components/Contact";

// ─── Tailwind / global font note ───────────────────────────────────────────
// Add these Google Font imports to your index.html <head>:
//
// <link rel="preconnect" href="https://fonts.googleapis.com" />
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
// <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
//
// Then in tailwind.config.js:
// theme: {
//   extend: {
//     fontFamily: {
//       display: ["'Bebas Neue'", "sans-serif"],
//       body: ["'DM Sans'", "sans-serif"],
//     },
//   },
// },
// ───────────────────────────────────────────────────────────────────────────

const MainPage = () => {
  return (
    <div className="font-body overflow-x-hidden" style={{ background: "hsl(195 35% 95%)" }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievement />
      <Contact />
    </div>
  );
};

export default MainPage;
