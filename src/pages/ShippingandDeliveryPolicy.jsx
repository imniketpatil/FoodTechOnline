import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ShippingServices from "../components/ShippingServices";

function ShippingandDeliveryPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <ShippingServices />
      <Footer />
    </>
  );
}

export default ShippingandDeliveryPolicy;
