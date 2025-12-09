import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6 md:p-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Preview Diagnostics" className="h-12 md:h-16" />
        </div>
        {/* Optional: Add navigation links here if needed in future */}
      </div>
    </header>
  );
};