import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
  image: string;
  isLast?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  icon: Icon,
  details,
  image,
  isLast
}) => {
  return (
    <div className="relative">
      {!isLast && (
        <div 
          className="absolute left-[43px] top-[88px] h-[calc(100%+48px)] w-[2px]"
          style={{
            background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0) 100%)'
          }}
        />
      )}
      
      <div className="flex gap-12">
        {/* Number and Icon Column */}
        <div className="relative shrink-0">
          <div 
            className="w-[88px] h-[88px] rounded-2xl flex items-center justify-center relative shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
            }}
          >
            <Icon className="h-8 w-8 text-white absolute" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">{number}</span>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-gray-600 mb-6 text-lg">{description}</p>

              {/* Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="relative group">
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};