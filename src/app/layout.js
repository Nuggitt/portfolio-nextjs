import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio of a newly graduated Computer Science AP graduate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
