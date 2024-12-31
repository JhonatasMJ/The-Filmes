// Input.tsx
import React from 'react';
import { InputProps } from '../types/Types';

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  className = '',
  name
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-sm font-medium text-secondary">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)} // Passando o nome do campo junto com o valor
        placeholder={placeholder}
        disabled={disabled}
        className="border border-gray-300 rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
        name={name} // Atribuindo o name ao input
      />
    </div>
  );
};

export default Input;
