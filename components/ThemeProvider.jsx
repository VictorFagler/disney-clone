"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = React.useState(false);

  // This will run only on the client-side
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // If the component is not yet mounted, return null to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
