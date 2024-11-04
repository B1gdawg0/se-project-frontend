import Navbar from "../components/navbar";

export default function HeaderLayout({ children }) {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
  }