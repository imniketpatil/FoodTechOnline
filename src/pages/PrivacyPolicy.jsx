import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PrivacyPolicyComponent from "../components/PrivacyPolicyComponent";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <PrivacyPolicyComponent />
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
