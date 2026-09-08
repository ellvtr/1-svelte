import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  base: "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1",
  variants: {
    variant: {
      default: "border-transparent bg-blue-600 text-white shadow hover:bg-blue-700",
      secondary: "border-transparent bg-slate-800 text-slate-100 hover:bg-slate-700",
      destructive: "border-transparent bg-red-600 text-white shadow hover:bg-red-700",
      outline: "text-slate-200 border-slate-700",
      orange: "border-transparent bg-orange-600 text-white shadow hover:bg-orange-700",
      emerald: "border-transparent bg-emerald-600 text-white shadow hover:bg-emerald-700",
      sky: "border-transparent bg-sky-600 text-white shadow hover:bg-sky-700",
      purple: "border-transparent bg-purple-600 text-white shadow hover:bg-purple-700",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
export { default as Badge } from "./badge.svelte";
