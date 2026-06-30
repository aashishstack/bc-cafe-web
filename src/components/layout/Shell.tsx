import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  clean?: boolean;
}

export function Container({ className, clean = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        !clean && "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full",
        className
      )}
      {...props}
    />
  );
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  decor?: boolean;
}

export function Section({ className, decor = false, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24 relative overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Grid({ className, cols = 3, ...props }: GridProps) {
  const colsMap = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div
      className={cn(
        "grid gap-6 md:gap-8",
        colsMap[cols],
        className
      )}
      {...props}
    />
  );
}
