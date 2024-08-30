import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RefundCancellationPolicyComponent from "../components/RefundCancellationPolicyComponent";

function RefundCancellationPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <RefundCancellationPolicyComponent />
      <Footer />
    </>
  );
}

export default RefundCancellationPolicy;
