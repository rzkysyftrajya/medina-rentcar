'use client';
import "./gradient-text.css";

export function GradientText({
  children,
  className = "",
  colors = ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"],
  animationSpeed = 8,
  style
}: {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  style?: React.CSSProperties
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`} style={style}>
      <span className="text-content" style={gradientStyle}>{children}</span>
    </div>
  );
}
