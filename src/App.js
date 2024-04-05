import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Herosec from "./components/Herosec";
import Aboutus from "./components/Aboutus";
import MySlide from "./components/MySlide";
import ContactUs from "./components/ContactUs";
import MyFooter from "./components/MyFooter";
import Newsletter from "./components/Newsletter";
import MyAccordion from "./components/MyAccordion";
import Backtotop from "./components/Backtotop";
import { useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 2500 });
  }, []);

  return (
    <div className="overflow-hidden">
      <Loader />
      <Herosec />
      <Backtotop />
      <Aboutus />
      <MySlide />
      <ContactUs />
      <MyAccordion />
      <Newsletter />
      <MyFooter />
    </div>
  );
}

export default App;
