import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className = '',
  style
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${
        hover ? 'hover:shadow-lg hover:scale-105 transition-all duration-300' : ''
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
