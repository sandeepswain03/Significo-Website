import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

function Real() {
  useGSAP(() => {
    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
      xPercent: -200,
    });
  });
  return (
    <div data-color="salmon" className="real section w-full">
      <div className="cont h-[400vh] relative">
        <div className="slides overflow-hidden flex sticky top-0 left-0 w-full h-[100vh]">
          <div className="slide w-full h-screen flex-shrink-0 flex items-center justify-center">
            <div className="text font-['Machina'] text-6xl">
              <h1 className="text-8xl">Real Talk,</h1>
              <h1 className="text-8xl">Real Impact</h1>
            </div>
            <div className="image absolute -translate-y-1/2 translate-x-1/2 top-1/2 right-0 w-[20rem] h-[20rem] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full h-screen flex-shrink-0 flex justify-center items-center relative">
            <div className="image1 w-[10rem] h-[10rem] overflow-hidden rounded-full absolute z-[3] left-[25%] top-[75%] -translate-y-1/2 ">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="image2 w-[20rem] h-[20rem] overflow-hidden rounded-full absolute z-[3] left-[35%] top-[-1%] -translate-y-1/2 ">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1519895609939-d2a6491c1196?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="image3 w-[25rem] h-[25rem] overflow-hidden rounded-full absolute z-[3] left-[40%] bottom-[-30%] ">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="w-[60%] text-center font-['Machina'] relative">
              <h3 className="absolute font-semibold leading-7 tracking-tight text-[1.3rem] w-1/3 text-left top-[-20%] left-0 -translate-y-1/2 -translate-x-1/3">
                We’re on a mission to impact as many lives as possible and build
                a better company while we do it. Here’s our progress.
              </h3>
              <h1 className="font-semibold text-[12rem] leading-none text-center text-white">
                20.4M
              </h1>
              <h3 className="text-5xl leading-none tracking-tight">
                Real people — real lives — we have built products and solutions
                for.
              </h3>
            </div>
            <div className="image4 absolute -translate-y-1/2 translate-x-1/2 top-1/2 right-[5%] w-[20rem] h-[20rem] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="slide w-full h-screen flex-shrink-0 flex justify-center items-center relative">
            <div className="image5 w-[20rem] h-[20rem] overflow-hidden rounded-full absolute z-[3] left-[55%] top-[15%] -translate-y-1/2 ">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b924ee31caf14d64b2a_TreeStructure.webp"
                alt=""
              />
            </div>
            <div className="image6 w-[25rem] h-[25rem] overflow-hidden rounded-full absolute z-[3] left-[5%] bottom-[-5%] ">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1b841fcd9f50115dbe9c_RocketLaunch.webp"
                alt=""
              />
            </div>
            <div className="w-[60%] text-center font-['Machina'] relative">
              <h3 className="absolute font-semibold leading-7 tracking-tight text-[1.3rem] w-1/3 text-left top-[-30%] left-0 -translate-y-1/2 -translate-x-1/3">
                Our team is global and diverse, because our individual
                experiences make us stronger.
              </h3>
              <h1 className="font-semibold text-[12rem] leading-none text-center text-white">
                49%
              </h1>
              <h3 className="text-5xl leading-none tracking-tight">
                Expert Women in Tech.
              </h3>
            </div>
            <div className="image7 absolute -translate-y-1/2 translate-x-1/2 top-1/2 right-[5%] w-[20rem] h-[20rem] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/65ea1ba6eb9637155282b42f_Lightning.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Real;
