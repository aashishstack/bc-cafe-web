import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-0.5 text-[10px] sm:text-xs font-semibold tracking-wide uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-border-focused",
  {
    variants: {
      variant: {
        default: "border border-accent/30 text-accent bg-accent/5",
        primary: "bg-accent text-bg-primary font-bold shadow-glow",
        secondary: "border border-border-default text-text-secondary bg-surface",
        success: "bg-success/10 text-success border border-success/25",
        warning: "bg-warning/10 text-warning border border-warning/25",
        danger: "bg-danger/10 text-danger border border-danger/25",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
