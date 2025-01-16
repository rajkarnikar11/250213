import logo from "./logo.svg";
import "./App.css";
import { SpinnerComponent } from "./components/SpinnerComponent";
import { useEffect, useRef, useState } from "react";
import BackInTime from "./components/BackInTime";
import DateComponent from "./components/DateComponent";

const ScrollComponent = ({ scrollPosition }) => {
  return (
    <div className="fixed flex items-center justify-center bottom-0 py-1 whitespace-nowrap font-bold uppercase rounded-t-xl px-4 bg-[#dea193] -translate-x-1/2 left-1/2">
      <div className="scroll-indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="w-5 h-5 scale-x-[1.2] " // Adjusted the size here
        >
          <polyline points="6 15 12 9 18 15"></polyline>
          <polyline points="6 19 12 13 18 19"></polyline>
        </svg>
      </div>
      {scrollPosition > 1200 ? "Keep Scrolling" : "Scroll"}
      <div className="scroll-indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="w-5 h-5 scale-x-[1.2] " // Adjusted the size here
        >
          <polyline points="6 15 12 9 18 15"></polyline>
          <polyline points="6 19 12 13 18 19"></polyline>
        </svg>
      </div>
    </div>
  );
};

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollableDivRef = useRef(null);
  const handleScroll = () => {
    const position = scrollableDivRef.current.scrollTop; // Get the vertical scroll position of the element
    setScrollPosition(position);
  };

  useEffect(() => {
    const scrollableDiv = scrollableDivRef.current;

    // Make sure the ref is attached to an element
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener on unmount
    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div
      ref={scrollableDivRef}
      className="h-screen max-w-screen overflow-x-hidden overflow-y-scroll bg-[	#fffbf7] snap-y snap-mandatory"
    >
      <ScrollComponent scrollPosition={scrollPosition} />
      <div className="fixed top-2 left-1/2">{scrollPosition}</div>
      <SpinnerComponent scrollPosition={scrollPosition} />
      <div className="h-screen text-white snap-start">
        <BackInTime />
      </div>
      <div className="text-white  snap-start">
        <DateComponent />
      </div>
    </div>
  );
}

export default App;
