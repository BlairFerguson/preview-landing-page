import React from 'react';

export const OpenApplication: React.FC = () => {
  return (
    <section className="border-t border-white/10 bg-white/5 py-20 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
          Open Application
        </p>
        <h2 className="text-3xl font-bold md:text-5xl">
          Join the movement shaping surgery&apos;s new frontier
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/80">
          We are always on the lookout for talented people who are energised by the future of surgical intelligence to join our
          team.
          <span className="block">
            We encourage engineers, clinicians, investors, and researchers who want to make surgical complications obsolete.
          </span>
          <span className="block">
            If our vision resonates with you, share your background and ambitions so we can explore building together.
          </span>
          We encourage engineers, clinicians, investors, and researchers who want to make surgical complications obsolete.
          If our vision resonates with you, share your background and ambitions so we can explore building together.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:people@preview-diagnostics.com?subject=Open%20application%20-%20Preview%20Diagnostics"
            className="mt-2 flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-8 py-3 text-base font-bold text-white transition-all hover:scale-105 hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/20"
          >
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
};
