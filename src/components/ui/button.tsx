import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-ink px-6 font-mono text-sm font-bold transition-[transform,box-shadow,background-color] duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky/40 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-coral text-primary-foreground shadow-[4px_4px_0_var(--ink)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--ink)]",
        dark: "bg-ink text-cream shadow-[4px_4px_0_var(--coral)] hover:-translate-y-0.5",
        outline:
          "bg-background text-ink shadow-[4px_4px_0_var(--ink)] hover:-translate-y-0.5 hover:bg-lemon/30",
        lemon:
          "bg-lemon text-ink shadow-[4px_4px_0_var(--mint)] hover:-translate-y-0.5",
        ghost: "border-transparent bg-transparent text-foreground shadow-none hover:bg-accent",
      },
      size: {
        default: "px-6 py-3",
        large: "px-7 py-3.5 text-base",
        icon: "size-11 shrink-0 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };