import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { useCallback } from "react";
import ParticlesBackground from "../../config/Particles";


const Layout = () => {
  
  return (
    <div>
       <ParticlesBackground/>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
