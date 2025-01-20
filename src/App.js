import logo from "./logo.svg";
import "./App.css";
import { SpinnerComponent } from "./components/SpinnerComponent";
import { useEffect, useRef, useState } from "react";
import BackInTime from "./components/BackInTime";
import DateComponent from "./components/DateComponent";
import HTMLFlipBook from "react-pageflip";
import { Page } from "./components/Page";
import Page2 from "./components/Page2";
import CoverImage from "./images/cover.jpg";
import ImageViewer from "./components/ImageViewer";
import GemsImage from "./images/gems.png";
import Page2image from "./images/page2.jpg";

const ScrollComponent = ({ scrollPosition }) => {
  return (
    <div className="fixed text-[#fffbf7] flex items-center justify-center bottom-0 py-1 whitespace-nowrap font-bold uppercase rounded-t-xl px-4 bg-[#dea193] -translate-x-1/2 left-1/2">
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
      {scrollPosition > 500 ? "Tap to turn page" : "Scroll"}
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
  const [width, setWidth] = useState(window.innerWidth - 20);

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
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - 20);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      ref={scrollableDivRef}
      className="h-screen max-w-screen overflow-x-hidden overflow-y-scroll bg-[	#fffbf7] snap-y snap-mandatory"
    >
      <ScrollComponent scrollPosition={scrollPosition} />
      <div className="fixed top-2 left-1/2">{scrollPosition}</div>
      <SpinnerComponent scrollPosition={scrollPosition} />

      <div className="flex flex-col items-center justify-center h-screen text-white snap-start">
        <span className="text-red-600 ">s{width}s</span>
        <div className="flipbook-container z-10 relative outline h-[500px] max-w-[500px]">
          <HTMLFlipBook
            width={width > 500 ? 500 : width}
            height={500}
            usePortrait={true} // Enables portrait mode
            mobileScrollSupport={true} // Ensures smooth scrolling on mobile
            startPage={0} // Start from the first page
            showCover={true} // Hide cover if not needed
            direction="ltr" // Flip pages from left to right
            onFlip={(e) => console.log("Page flipped", e)} // Log flip events
          >
            <div className="demoPage">
              <img
                style={{ width: width }}
                className=" h-[500px] max-w-full rounded shadow-xl"
                src={CoverImage}
                alt="cover"
              />
            </div>
            <div className="demoPage">
              <ImageViewer
                imageUrl={GemsImage}
                text="It all began at Gems Institute of Higher Education.
"
              />
            </div>
            <div className="demoPage">
              <ImageViewer
                imageUrl={Page2image}
                text="She noticed him through the classroom window...
"
              />
            </div>
            <div className="demoPage">Page 3</div>
            <div className="demoPage">Page 4</div>
          </HTMLFlipBook>
          {/* <BackInTime /> */}
          <img
            style={{ width: width }}
            className=" h-[500px] absolute top-0 -z-[1] max-w-full rounded shadow-xl"
            src={CoverImage}
            alt="cover"
          />
        </div>
      </div>
      <div className="text-white snap-start"></div>
    </div>
  );
}

export default App;