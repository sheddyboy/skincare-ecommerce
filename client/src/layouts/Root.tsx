import Navbar from "components/Navbar/Navbar";
import Community from "pages/Home/Community/Community";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/Footer";
import useScrollTop from "hooks/useScrollTop";
import PageTransition from "components/PageTransition/PageTransition";
import CTA from "pages/Home/CTA/CTA";

const Root = () => {
  useScrollTop({ smoothScroll: false });
  return (
    <>
      <Navbar />
      <PageTransition>
        <Outlet />
        <CTA />
        <Community />
      </PageTransition>
      <Footer />
    </>
  );
};

export default Root;
