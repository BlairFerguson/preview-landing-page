import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/gastro-background.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-background-dark/60 to-background-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-6 text-center">
        <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl">
          The Surgeon's Sixth Sense
        </h2>
        <p className="max-w-3xl text-lg text-white/80 md:text-xl leading-relaxed">
          Pioneering hyperspectral imaging for real-time intra-surgical decision making
        </p>
      </div>
    </section>
  );
};