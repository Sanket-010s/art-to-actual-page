import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Achievement from "./pages/Achievement";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div
          className="min-h-screen bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.png')" }}
        >
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Achievement />
          <Contact />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
