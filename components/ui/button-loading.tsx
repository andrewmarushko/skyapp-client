import React from 'react';

export const ButtonLoading: React.FC = () => {
  return (
    <div className="flex select-none items-center justify-center">
      <i className="border-radius-50 h-1 w-1 animate-loading-blink bg-accent-700" />
      <i className="border-radius-50 h-1 w-1 animate-loading-blink bg-accent-700 delay-200" />
      <i className="border-radius-50 h-1 w-1 animate-loading-blink bg-accent-700 delay-500" />
    </div>
  );
};

export default ButtonLoading;
