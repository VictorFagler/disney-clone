import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Header from "/components/Header";

export const metadata = {
  title: "Disney+ Clone",
  description: "For react course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
