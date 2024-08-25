import Home from "./components/Home";
import Craft from "./components/Craft";
import Real from "./components/Real";
import Team from "./components/Team";
import Capsules from "./components/Capsules";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    new LocomotiveScroll();
    document.querySelectorAll(".section").forEach(function (e) {
      ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: function () {
          document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function () {
          document.body.setAttribute("theme", e.dataset.color);
        },
      });
    });
  });

  return (
    <div className="main w-full">
      <Home />
      <Craft />
      <Real />
      <Team />
      <Capsules />
      <Footer />
    </div>
  );
}

export default App;
