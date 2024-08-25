import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    let initialPath = "M 0 125 Q 760 125 1520 125";
    let string = document.querySelector(".string");

    string.addEventListener("mousemove", (dets) => {
      let rect = string.getBoundingClientRect();
      let x = dets.clientX - rect.left;
      let y = dets.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        y = Math.max(0, Math.min(200, y));

        let path = `M 0 125 Q ${x} ${y} 1520 125`;
        // console.log(x, y);

        gsap.to(".svg path", {
          attr: { d: path },
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });

    string.addEventListener("mouseleave", () => {
      gsap.to(".svg path", {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    });
  }, []);

  return (
    <>
      <div
        data-color="white"
        className="footer relative w-full mt-20 h-[50vh] bg-[#F5F19C]"
      >
        <div className="string absolute top-[-33%] left-0 w-full h-[250px]">
          <svg className="svg w-full h-full">
            <path
              d="M 0 125 Q 760 125 1520 125"
              stroke="black"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Footer;
