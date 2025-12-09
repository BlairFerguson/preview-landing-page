import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 text-center md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6">
        <h2 className="text-3xl font-bold md:text-5xl">
          Pioneering the Future of Surgery
        </h2>
        <p className="text-lg text-white/70 leading-relaxed">
          We are committed to partnering with leading medical institutions and
          innovators to bring this transformative technology to operating rooms
          worldwide. Connect with us to learn more about our vision and
          collaboration opportunities.
        </p>
        <a
          href="mailto:info@preview-diagnostics.com"
          className="mt-4 flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-3 text-base font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
        >
          <span>Contact Us</span>
        </a>
      </div>
    </section>
  );
};