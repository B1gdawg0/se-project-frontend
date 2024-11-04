import AdminNavbar from "../components/admin_navbar";

export default function HeaderLayout({ children }) {
    return (
        <>
            <AdminNavbar/>
            {children}
        </>
    );
  }