import React from 'react';
import './Button.css'

interface ButtonProps {
  onClick: (ev:any)=>void;
  label: string;
  disabled?: boolean;
}

interface SmallButtonProps {
    onSmallClick: ()=>void;
    label: string;
    visible:boolean;
    smallKey:any
  }
  


export const Button: React.FC<ButtonProps> = ({ label,onClick, disabled = false }) => {
  return (
    <button className='big-button' onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export const SmallButton: React.FC<SmallButtonProps> = ({ label,onSmallClick,visible,smallKey }) => {
    return (
      <button data-index={smallKey} className='small-button' onClick={onSmallClick} style={{visibility:visible?'visible':'hidden'}}>
        {label}
      </button>
    );
  };

// export default Button;
