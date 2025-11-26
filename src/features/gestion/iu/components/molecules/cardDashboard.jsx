import React from 'react';

export const CardDash = ({ 
  title, 
  count, 
  titleColor = '#6B7280',
  icon: IconComponent = null,
  iconColor = '#FF6B9D',
  onClick = null 
}) => {
  return (
    <div className="rounded-lg bg-[#FFFFFF] border border-[#676E7614] flex flex-col p-6 gap-4 shadow-sm hover:shadow-md transition-shadow">
      <section className="flex items-start justify-between">
        <h3 style={{ color: titleColor }} className="font-medium text-sm">
          {title}
        </h3>
        {IconComponent && (
          <button
            onClick={onClick}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="más información"
          >
            <IconComponent 
              className="w-5 h-5" 
              style={{ color: iconColor }}
            />
          </button>
        )}
      </section>

      <p className="font-semibold text-2xl text-pink-ia">
        {count}
      </p>
    </div>
  );
};

export default CardDash;