import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  className = '',
  style,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-gray-700 rounded-lg shadow-md dark:shadow-lg p-6 ${
        hover ? 'hover:shadow-lg dark:hover:shadow-xl hover:scale-105 transition-all duration-300' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
