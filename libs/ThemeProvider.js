import { ThemeProvider as NextThemesProvider } from "next-themes";

function ThemeProvider({ ...props }) {
  return <NextThemesProvider {...props} />;
}

export default ThemeProvider;
