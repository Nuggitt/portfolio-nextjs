import "./globals.css";
import Header from "@/components/header";
import ThemeProvider from "@/components/themeProvider";
import Footer from "@/components/footer";

export const metadata = {
  metadataBase: new URL("https://portfolio.nuggit.dk"),
  title: {
    default: "Philip | Full-stack .NET & React Developer",
    template: "%s | Philip",
  },
  description:
    "Portfolio of a newly graduated Computer Science AP graduate building modern web apps with .NET and React/Next.js.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Philip – Portfolio",
    title: "Philip | Full-stack .NET & React Developer",
    description:
      "I build fast, scalable web apps with .NET, C#, React/Next.js, SQL, and Tailwind.",
    // images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philip | Full-stack .NET & React Developer",
    description:
      "I build fast, scalable web apps with .NET, C#, React/Next.js, SQL, and Tailwind.",
    // images: ["/og-image.jpg"],
  },
  // robots: { index: true, follow: true }, // til SEO
  // icons: { icon: "/favicon.ico" },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f5f9" }, // slate-100
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ], // gray-900
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
