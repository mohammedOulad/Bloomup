import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
  backgroundColor: string;
}

/** this is a button */
export const Button =({ children, variant = 'primary', backgroundColor ,...props }: Props) => {

  return (
    <button
      {...props}
      style={{
        //backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        backgroundColor: backgroundColor,
        color: 'black',
        border: 'none',
        borderRadius: '60px',
        padding: 10,
        cursor: 'pointer',
        // backgroundColor: 'black',
        // color: 'black',
      }}
    >
      {children}
    </button>
  );
}
