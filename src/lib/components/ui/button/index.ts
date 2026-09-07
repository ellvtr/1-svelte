import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-1.5 cursor-pointer",
  variants: {
    variant: {
      default: "bg-blue-600 text-white shadow hover:bg-blue-700 active:bg-blue-800",
      destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
      outline: "border border-slate-700 bg-transparent shadow-sm hover:bg-slate-800 hover:text-white text-slate-200",
      secondary: "bg-slate-800 text-slate-100 shadow-sm hover:bg-slate-700",
      ghost: "hover:bg-slate-800 hover:text-white text-slate-300",
      link: "text-blue-400 underline-offset-4 hover:underline",
      emerald: "bg-emerald-600 text-white shadow hover:bg-emerald-700",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
export type ButtonSize = VariantProps<typeof buttonVariants>["size"];
export { default as Button } from "./button.svelte";
