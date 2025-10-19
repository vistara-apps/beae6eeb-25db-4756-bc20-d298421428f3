'use client';

import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  isActive?: boolean;
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  onClick,
  isActive = false 
}: FeatureCardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-6 rounded-2xl text-left
        transition-all duration-200
        ${isActive 
          ? 'bg-accent text-white shadow-lg scale-105' 
          : 'bg-white/5 hover:bg-white/10 text-fg'
        }
      `}
      aria-pressed={isActive}
    >
      <div className="flex items-start gap-4">
        <div className={`
          p-3 rounded-xl
          ${isActive ? 'bg-white/20' : 'bg-accent/20'}
        `}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className={`text-sm ${isActive ? 'text-white/90' : 'text-muted'}`}>
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}
