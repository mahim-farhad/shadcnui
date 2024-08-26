"use client";

import { memo } from "react";

import { useTheme } from "next-themes";

import { Toaster as Sonner } from "sonner";

const Toaster = memo(function Toaster({ ...props }) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group p-5 toast font-sans text-sm group-[.toaster]:bg-background-light group-[.toaster]:text-error group-[.toaster]:border-gray-200 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          icon: "text-error"
        },
      }}
      {...props}
    />
  )
});

export { Toaster };
