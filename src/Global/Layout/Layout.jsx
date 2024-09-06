import React from "react";
import Navbar from  "../Navbar/Navbar";
import TopBar from "../Navbar/TopBar";
import Footer from "../Footer/Footer";
import { WhatsappIconComponent } from "../WhatsappIcon";


const Layout = ({ children }) => {
  return (
    <div className="relative">
      <header className="w-full">
        <div className="fixed w-full z-10">
          <TopBar />
          <Navbar />
        </div>
      </header>
      <main>
        {children}
      </main>
        <Footer />
        <WhatsappIconComponent />
    </div>
  );
};

export default Layout;
