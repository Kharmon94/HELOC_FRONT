import React from 'react';

interface CustomSliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
}

export function CustomSlider({ min, max, step, value, onChange }: CustomSliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={handleChange}
      style={{
        width: '100%',
        height: '8px',
        borderRadius: '5px',
        background: '#e2e8f0',
        outline: 'none',
        WebkitAppearance: 'none',
        appearance: 'none',
      }}
    />
  );
}
