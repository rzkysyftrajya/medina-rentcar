'use client';

import './star-border.css';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "hsl(var(--primary))",
  speed = "6s",
  thickness = "1px",
  children,
  ...rest
}: {
  as?: React.ElementType,
  className?: string,
  color?: string,
  speed?: string,
  thickness?: string,
  children: ReactNode,
  [key: string]: any,
}) => {
  return (
    <Component 
      className={cn("star-border-container", className)} 
      style={{
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          '--star-color': color,
          '--animation-speed': speed,
          '--thickness': thickness,
        } as React.CSSProperties}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          '--star-color': color,
          '--animation-speed': speed,
          '--thickness': thickness,
        } as React.CSSProperties}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
