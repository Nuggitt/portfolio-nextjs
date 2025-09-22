import "./globals.css";
import Header from "@/components/header";
import ThemeProvider from "@/components/themeProvider";
import Footer from "@/components/footer";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio of a newly graduated Computer Science AP graduate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-slate-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 antialiased">
        <ThemeProvider>
          <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
