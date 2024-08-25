import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);
function Team() {
  useGSAP(() => {
    const listelems = document.querySelectorAll(".listelem");
    listelems.forEach((listelem) => {
      listelem.addEventListener("mousemove", (dets) => {
        gsap.to(listelem.querySelector(".picture"), {
          x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
          opacity: 1,
          ease: "power4",
          duration: 0.3,
        });
      });
      listelem.addEventListener("mouseleave", () => {
        gsap.to(listelem.querySelector(".picture"), {
          opacity: 0,
          ease: "power4",
          duration: 0.3,
        });
      });
    });
  });

  const teamMembers = [
    { id: "01", name: "Dr. Rick McCartney", title: "CEO" },
    { id: "02", name: "Chris Koha", title: "COO" },
    { id: "03", name: "Caroline Nieto", title: "Chief Product Officer" },
    { id: "04", name: "Victor Albertos", title: "CTO" },
    { id: "05", name: "Dr. Jana Schmidt", title: "Chief Innovation Officer" },
    { id: "06", name: "Adrian Rubio", title: "VP Of Engineering" },
    { id: "07", name: "Cy Serrano", title: "VP Of Product" },
    { id: "08", name: "Lenya McGrath", title: "VP of Partnership" },
  ];

  return (
    <div data-color="white" className="team section font-['Machina'] py-20">
      <h1 className="text-7xl text-center tracking-tight">Our Team</h1>
      <div className="list w-full mt-20 px-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`listelem relative border-b-2 border-black w-full py-[3rem] ${
              index === teamMembers.length - 1 ? "border-b-0" : ""
            }`}
          >
            <div className="relative flex items-center justify-between z-[3] ">
              <div className="left flex gap-20">
                <h3 className="text-5xl">{member.id}</h3>
                <h1 className="text-5xl">{member.name}</h1>
              </div>
              <h3 className="text-3xl">{member.title}</h3>
            </div>
            <div className="picture opacity-0 w-[15rem] h-[15rem] overflow-hidden rounded-full absolute z-[4] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500"></div>
            <div className="bluelayer absolute bottom-0 left-0 z-[2] w-full h-[0%] bg-blue-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
