import "../style/globals.css";

export const metadata = {
  title: "Se Project(Replace this later)",
  description: "Web something...(Replace this later)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
