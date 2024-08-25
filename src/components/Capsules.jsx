import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

function Capsules() {
  useGSAP(() => {
    gsap.to(".capsule2", {
      y: 0,
      scrollTrigger: {
        trigger: ".capsules",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });
  return (
    <div data-color="white" className="capsules section w-full h-screen mt-32 px-32 flex items-start justify-between">
      <div className="left py-10 w-1/3 h-full flex flex-col justify-between">
        <h1 className="text-3xl leading-[2.8rem] font-['Machina'] ">
          Stay up-to-date on the latest healthcare innovations and thought
          leadership.
        </h1>
        <div className="btmHeading">
          <h1 className="text-6xl font-['Machina']">Explore Our Insights</h1>
          <div className="w-fit mt-10 px-10 py-5 border-[1px] border-black">
            <div className="masker overflow-hidden">
              <span className="inline-block">OUR SOLUTIONS</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right font-['Machina'] h-full flex items-center gap-10">
        <div className="capsule1 -rotate-[16deg] flex flex-col items-center px-7 rounded-full p-10 border-[1px] border-black ">
          <div className="w-80 h-80 bg-yellow-500 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover "
              src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/66327831c53bb8c459a9b605_Untitled%20design-7.webp"
              alt=""
            />
          </div>
          <div className="textCapsule text-center mt-10">
            <h3 className="text-2xl">Equity in Tech: An</h3>
            <h3 className="text-2xl">International Women's</h3>
            <h3 className="text-2xl">Day Conversation with</h3>
            <h3 className="text-2xl">Caroline Nieto</h3>
            <h3 className="text-2xl">Significo's CPO</h3>
          </div>
          <button className="bg-purple-400 text-white px-4 rounded-full py-3 mt-24 mb-10">
            Thought Leadership
          </button>
        </div>
        <div className="capsule2 translate-y-32 -rotate-[16deg] flex flex-col items-center px-7 rounded-full p-10 border-[1px] border-black ">
          <button className="bg-purple-400 text-white px-4 rounded-full py-3 mt-10 mb-24">
            Thought Leadership
          </button>
          <div className="textCapsule text-center mb-10">
            <h3 className="text-2xl">5 Key takeaways from</h3>
            <h3 className="text-2xl">the Ruters digital</h3>
            <h3 className="text-2xl">Health 2024 Summit</h3>
          </div>
          <div className="w-80 h-80 bg-yellow-500 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover "
              src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/664e2389903487ba78a7ec53_Untitled%20design-13.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capsules;
