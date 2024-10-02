import "../style/globals.css";

export const metadata = {
  title: "Se Project(Replace this later)",
  description: "Web something...(Replace this later)",
};

import localFont from 'next/font/local'

//👇 Configure our local font object
const perpetuaReg = localFont({ src: './fonts/perpetua.ttf' })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className = {`${perpetuaReg.className} antialiased`}> 
        {children}
      </body>
    </html>
  );
}
