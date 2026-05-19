import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "glow" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-brand-primary hover:bg-brand-secondary text-slate-950 font-semibold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20",
    outline:
      "bg-transparent border border-white/15 text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/30",
    glow: "bg-gradient-to-r from-brand-primary to-accent-teal text-slate-950 font-semibold shadow-lg shadow-brand-primary/20 hover:shadow-cyan-500/20 hover:scale-[1.02] border border-transparent",
    danger:
      "bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 hover:border-rose-500/30",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base rounded-2xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
