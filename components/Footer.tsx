import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-10 mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Preview Diagnostics. All rights reserved.
        </p>
        <a
          href="mailto:info@preview-diagnostics.com"
          className="font-medium text-white/80 transition-colors hover:text-primary"
        >
          info@preview-diagnostics.com
        </a>
      </div>
    </footer>
  );
};