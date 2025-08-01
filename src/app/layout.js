import "./globals.css";
import Header from "@/components/header";
import ThemeProvider from "@/components/themeProvider";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio of a newly graduated Computer Science AP graduate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
