import React from 'react';

interface FeatureSectionProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  category,
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}) => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-20">
        
        {/* Text Content */}
        <div className={`flex flex-col gap-4 text-center md:text-left ${reversed ? 'md:order-2' : ''}`}>
          <span className="font-bold uppercase tracking-widest text-primary text-sm">
            {category}
          </span>
          <h3 className="text-3xl font-bold md:text-4xl">{title}</h3>
          <p className="text-lg text-white/70 leading-relaxed">{description}</p>
        </div>

        {/* Image Content */}
        <div className={`relative flex h-80 w-full items-center justify-center rounded-xl bg-black/20 lg:h-96 ${reversed ? 'md:order-1' : ''}`}>
          <img
            className="h-full w-full rounded-xl object-cover opacity-50 mix-blend-lighten"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>

      </div>
    </section>
  );
};