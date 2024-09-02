import { poppins, montserrat, firaCode } from "@libs/fonts";

import clsx from "clsx";

import "@styles/globals.css";

import ThemeProvider from "@libs/ThemeProvider";

import { Toaster } from "@components/ui/Sonner";
import TopNav from "@components/navigations/Navbar";

export const metadata = {
  title: "React Shadcn Components",
  description: "..."
};

export const viewport = {
  themeColor: "rgb(0 0 0)"
};

function RootLayout({ children }) {
  const bodyClasses = clsx(
    poppins.variable,
    montserrat.variable,
    firaCode.variable,
  );

  return (
    <html lang="en">
      <body className={bodyClasses}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <TopNav />

          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
