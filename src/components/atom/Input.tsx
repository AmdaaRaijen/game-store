import React, { HTMLInputTypeAttribute } from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type?: HTMLInputTypeAttribute | undefined;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function Input({
  label,
  placeholder,
  type,
  className,
  onChange,
  value,
}: InputProps) {
  return (
    <div className="w-full">
      <label htmlFor={label}>{label}</label>
      <input
        onChange={onChange}
        id={label}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`border border-zinc-500 rounded-md p-1 bg-zinc-100 w-full focus:outline-2 focus:outline-zinc-500 ${className}`}
      />
    </div>
  );
}
