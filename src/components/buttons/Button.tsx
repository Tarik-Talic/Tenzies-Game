import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  classname: string;
  onClick: () => void;
};

function Button({ children, classname, onClick }: ButtonProps) {
  return (
    <button className={classname} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
