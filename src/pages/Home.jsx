import React, { useEffect } from "react";
import HomepageBanner from "../components/HomepageBanner";
import NavBar from "../components/NavBar";
import MobileDetailsOne from "../components/MobileDetailsOne";
import TempComponent from "../components/TempComponent";
import StreakTracking from "../components/StreakTracking";
import MobileDetailsTwo from "../components/MobileDetailsTwo";
import QuizAndProgress from "../components/QuizAndProgress";
import FeedbackAndFAQs from "../components/FeedbackAndFAQ";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <NavBar />
      <HomepageBanner />
      <MobileDetailsOne />
      <TempComponent />
      <StreakTracking />
      <MobileDetailsTwo />
      <QuizAndProgress />
      <FeedbackAndFAQs />
      <ContactUs />
      <Footer />
      {/* <MobileDetailsOne /> */}
    </>
  );
}

export default Home;
