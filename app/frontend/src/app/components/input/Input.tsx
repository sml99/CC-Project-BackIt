import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'outline' | 'filled';
}

const Input: FC<InputProps> = ({ variant = 'outline', ...props }) => {
  const inputClass =
    variant === 'outline' ? 'border-2 border-gray-300' : 'bg-gray-200';

  return <input className={`p-2 rounded ${inputClass}`} {...props} />;
};

export default Input;
