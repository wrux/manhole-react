import { cva } from "class-variance-authority";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "text-3xl font-semibold tracking-tight",
      h3: "text-2xl font-semibold tracking-tight",
      body: "leading-7",
      link: "font-medium text-primary underline underline-offset-4",
      blockquote: "border-l-2 pl-6 italic",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});
