import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
  gradient
}) => {
  return (
    <div className="group relative">
      {/* Card Background */}
      <div className={cn(
        "absolute inset-0 rounded-3xl transition-opacity duration-300",
        "opacity-0 group-hover:opacity-100",
        gradient
      )} />
      
      {/* Card Content */}
      <div className="relative h-full p-8 flex flex-col">
        {/* Icon Container */}
        <div className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-xl",
          "transition-all duration-300 mb-6",
          "bg-white shadow-md group-hover:shadow-xl",
          color
        )}>
          <Icon className="h-7 w-7" />
        </div>
        
        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};