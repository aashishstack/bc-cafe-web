import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focused disabled:pointer-events-none disabled:opacity-50 cursor-pointer font-sans active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-text-primary text-bg-primary border border-text-primary hover:bg-transparent hover:text-text-primary hover:-translate-y-0.5",
        secondary: "bg-transparent border border-text-primary text-text-primary hover:bg-text-primary hover:text-bg-primary hover:-translate-y-0.5",
        ghost: "bg-transparent text-text-primary hover:bg-bg-secondary border border-transparent hover:border-border-default",
        fab: "bg-text-primary text-bg-primary border border-text-primary hover:bg-transparent hover:text-text-primary hover:-translate-y-0.5 p-4 shadow-md",
      },
      size: {
        default: "h-11 px-6 py-2.5 rounded-none",
        sm: "h-9 px-4 text-xs rounded-none",
        lg: "h-14 px-8 text-base rounded-none",
        icon: "h-11 w-11 rounded-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
