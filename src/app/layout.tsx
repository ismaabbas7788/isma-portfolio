import "./globals.css";

export const metadata = {
  title: "Isma Abbas | Front-End Developer",
  description: "Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-200 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),#0f0f0f_80%)]">
        {children}
      </body>
    </html>
  );
}
