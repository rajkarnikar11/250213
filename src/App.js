import logo from "./logo.svg";
import "./App.css";
import { SpinnerComponent } from "./components/SpinnerComponent";
import { useEffect, useRef, useState } from "react";
import BackInTime from "./components/BackInTime";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollableDivRef = useRef(null);
  const handleScroll = () => {
    const position = scrollableDivRef.current.scrollTop; // Get the vertical scroll position of the element
    console.log(position, "here");
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
      className="h-screen overflow-y-scroll bg-[#28282B] snap-y snap-mandatory"
    >
      <div className="fixed top-2 left-1/2">{scrollPosition}</div>
      <SpinnerComponent scrollPosition={scrollPosition} />
      <div className="h-screen text-white snap-start">
        <BackInTime />
      </div>
      <div className="h-screen text-white snap-start">page 2</div>
    </div>
  );
}

export default App;
