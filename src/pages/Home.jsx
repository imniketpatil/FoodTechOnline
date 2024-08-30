import React from "react";
import HomepageBanner from "../components/HomepageBanner";
import NavBar from "../components/NavBar";
import MobileDetailsOne from "../components/MobileDetailsOne";
import TempComponent from "../components/TempComponent";
import StreakTracking from "../components/StreakTracking";
import MobileDetailsTwo from "../components/MobileDetailsTwo";
import QuizAndProgress from "../components/QuizAndProgress";
import FeedbackAndFAQs from "../components/FeedbackAndFAQ";
import Footer from "../components/Footer";

function Home() {
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
      <Footer />
      {/* <MobileDetailsOne /> */}
    </>
  );
}

export default Home;
