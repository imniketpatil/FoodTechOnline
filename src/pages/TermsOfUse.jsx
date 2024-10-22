import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TermsAndConditionsComponent from "../components/TermsAndConditionsComponent";

function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <TermsAndConditionsComponent />
      <Footer />
    </>
  );
}

export default TermsOfUse;
