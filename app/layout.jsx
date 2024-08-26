import { poppins, montserrat, firaCode } from "@libs/fonts";

import { twMerge } from "tailwind-merge";

import "@styles/globals.css";

import { Toaster } from "@components/ui/Sonner";

export const metadata = {
  title: "React Shadcn Components",
  description: "..."
};

export const viewport = {
  themeColor: "rgb(0 0 0)"
};

function RootLayout({ children }) {
  const bodyClasses = twMerge(
    poppins.variable, montserrat.variable, firaCode.variable,
    "antialiased font-sans text-base leading-normal font-normal",
    "select-none overflow-x-hidden",
    "text-foreground-light dark:text-foreground-dark",
    "bg-background-light dark:bg-background-light"
  );

  return (
    <html lang="en">
      <body className={bodyClasses}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
