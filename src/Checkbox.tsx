import React, { useState } from 'react';
import './Checkbox.css'; // Import your CSS file where you define styles for the checkbox

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked=false, onChange, label }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <div className="checkbox-container" onClick={handleClick}>
      <div className={`checkbox ${isChecked ? 'checked' : ''}`} />
      <div className="label">{label}</div>
    </div>
  );
};

export default Checkbox;
