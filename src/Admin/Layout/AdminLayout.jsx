import React from "react";
import Header from "./AdminHeader";
import Footer from "./AdminFooter";

const AdminLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};
export default AdminLayout;
