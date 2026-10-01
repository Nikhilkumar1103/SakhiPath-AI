import React from 'react';

export function OptionButton({ 
  variant = 'yes', // 'yes' | 'no' | 'idk' | 'primary' | 'secondary'
  onClick, 
  children, 
  icon: Icon,
  disabled = false,
  className = ''
}) {
  return (
    <button 
      className={`option-btn variant-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={24} className="opt-icon" />}
      <span className="opt-text">{children}</span>
    </button>
  );
}
