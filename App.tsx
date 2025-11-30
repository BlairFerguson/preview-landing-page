import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { DemoModal } from "./components/DemoModal";
import { ChatWidget } from "./components/ChatWidget";

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemo = () => setIsDemoModalOpen(true);
  const closeDemo = () => setIsDemoModalOpen(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display text-text-main overflow-x-hidden selection:bg-primary selection:text-white">
      <Header onOpenDemo={openDemo} />
      <main className="flex-grow">
        <Hero onOpenDemo={openDemo} />
        <Features />
        <HowItWorks />
        <CTA onOpenDemo={openDemo} />
      </main>
      <Footer />
      
      {/* Interactive Elements */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemo} />
      <ChatWidget />
    </div>
  );
}

export default App;
