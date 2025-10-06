import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop"; // 👈 Add this import

const Layout = () => {
  return (
    <>
      <ScrollToTop /> {/* 👈 This ensures scroll-to-top on route change */}
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
