import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-orbitron font-black tracking-[0.2em] transition-all active:scale-95 disabled:opacity-50 uppercase italic';
  
  const variants = {
    primary: 'bg-age-cyan/10 text-age-cyan border border-age-cyan/40 hover:bg-age-cyan/20 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]',
    secondary: 'bg-white/5 text-slate-300 border border-white/10 hover:border-age-cyan/40 hover:text-age-cyan shadow-lg',
    ghost: 'bg-transparent text-slate-500 hover:text-age-cyan hover:bg-age-cyan/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-8 py-3.5 text-[12px]',
    lg: 'px-10 py-5 text-[14px]',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
