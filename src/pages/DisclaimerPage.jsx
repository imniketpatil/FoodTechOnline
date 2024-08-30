import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";

function DisclaimerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <Disclaimer />
      <Footer />
    </>
  );
}

export default DisclaimerPage;
