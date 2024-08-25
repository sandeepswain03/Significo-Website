import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    gsap.set(".slidesm", { scale: 5 });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.from(
      ".videoDiv",
      {
        "--clip": "100%",
        ease: "power2",
      },
      "a"
    );
    tl.to(
      ".slidesm",
      {
        scale: 1,
        ease: "power2",
      },
      "a"
    );
    tl.to(
      ".rgt",
      {
        xPercent: 5,
        stagger: 0.03,
        ease: "power4",
      },
      "a"
    );
    tl.to(
      ".lft",
      {
        xPercent: -5,
        stagger: 0.03,
        ease: "power4",
      },
      "a"
    );
    tl.to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: "power4",
      },
      "b"
    );
    tl.to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: "power4",
      },
      "b"
    );
  });

  return (
    <div data-color="black" className="home section w-full h-[200vh]">
      <div className="w-full sticky top-0 left-0 ">
        <div className="btmText absolute z-[4] bottom-[7%] w-52 left-[3%] ">
          <h1>
            We build big ideas.
            <br /> Software. Apps. Tools.
            <br /> For real people.Real lives.
          </h1>
        </div>
        <div className="videoDiv w-full h-screen absolute z-[3] top-0 left-0 overflow-hidden">
          <video
            loop
            autoPlay
            muted
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            src="https://cdn.significo.com/videos/significo-main-hero.mp4"
          ></video>
        </div>
        <div className="marqueecontainer w-full h-screen relative overflow-hidden">
          <div className="heading absolute top-[7%] left-1/2 -translate-x-1/2 w-72 text-center">
            <h1 className="text-xl font-regular">
              We craft healthcare technology that is more human:
            </h1>
          </div>
          <div className="slidesm absolute scale-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
            <div className="row lft -translate-x-1/2 w-full py-1 flex items-center gap-10 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  empathetic
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  useful
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483189_Ellipse%20845-1.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  intuitive
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  empathetic
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483188_Ellipse%20845-2.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  useful
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.webp"
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  intuitive
                </h1>
              </div>
            </div>
            <div className="row rgt -translate-x-1/3 w-full py-1 flex items-center gap-10 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  empathetic
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  useful
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  intuitive
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  empathetic
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  useful
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  intuitive
                </h1>
              </div>
            </div>
            <div className="row lft -translate-x-1/2 w-full py-1 flex items-center gap-10 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  empathetic
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.webp"
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  useful
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483185_Ellipse%20844.webp"
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  intuitive
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483183_Ellipse%20845-6.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  empathetic
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483195_Ellipse%20845.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  useful
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483184_Ellipse%20845.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  intuitive
                </h1>
              </div>
            </div>
            <div className="row rgt -translate-x-2/3 w-full py-1 flex items-center gap-10 whitespace-nowrap">
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  empathetic
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] bg-yellow-500 rounded-full"></div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  useful
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  intuitive
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483180_Ellipse%20845-4.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  empathetic
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d3483181_Ellipse%20845-5.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  useful
                </h1>
                <div className="imgdiv w-[3.5rem] h-[3.5rem] rounded-full">
                  <img
                    className="w-full h-full object-cover"
                    src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483164/659dbdfd5a080be8d348317a_Ellipse%20845-10.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="elem flex items-center gap-10">
                <h1 className="font-['Machina'] text-7xl font-semibold ">
                  intuitive
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
