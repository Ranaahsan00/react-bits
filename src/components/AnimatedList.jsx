import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { IconCheck } from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedList = () => {
  const IconCheck = ({ className = "w-5 h-5 inline-block mr-2" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;

    const items = listRef.current.querySelectorAll("li");

    gsap.fromTo(
      items,
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <ul className="space-y-3" ref={listRef}>
      <li className="flex items-start">
        <IconCheck />
        <span className="ml-2">Design systems & UI/UX</span>
      </li>
      <li className="flex items-start">
        <IconCheck />
        <span className="ml-2">Full-stack development</span>
      </li>
      <li className="flex items-start">
        <IconCheck />
        <span className="ml-2">Performance & accessibility</span>
      </li>
    </ul>
  );
};

export default AnimatedList;
