import logo from "./logo.svg";
import "./App.css";
import { SpinnerComponent } from "./components/SpinnerComponent";
import { use, useEffect, useRef, useState } from "react";
import BackInTime from "./components/BackInTime";
import DateComponent from "./components/DateComponent";
import HTMLFlipBook from "react-pageflip";
import { Page } from "./components/Page";
import Page2 from "./components/Page2";
import CoverImage from "./images/cover.webp";
import SpiralImage from "./images/spiral.webp";
import ImageViewer from "./components/ImageViewer";
import GemsImage from "./images/gems.png";
import Page2image from "./images/page2.jpg";
import Page3image from "./images/page3.png";
import Page4image from "./images/date.png";

import AnimatedSvg from "./components/AnimatedSvg";

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
  const [isInView, setIsInView] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);

  const handleScroll = () => {
    const position = scrollableDivRef.current.scrollTop; // Get the vertical scroll position of the element
    setScrollPosition(position);
  };
  const [width, setWidth] = useState(window.innerWidth - 20);
  const book = useRef(null);
  const page = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (page?.current instanceof Element) {
      observer.observe(page?.current);
    }

    return () => {
      if (page?.current instanceof Element) {
        observer.unobserve(page?.current);
      }
    };
  }, []);
  const flipPages = async () => {
    const currentPage = book.current.pageFlip().getCurrentPageIndex();
    const totalFlips = currentPage - 1; // Number of pages to flip to reach the second page
    const delay = 350; // Delay in milliseconds between each flip

    for (let i = 0; i < totalFlips; i++) {
      console.log(i, totalFlips);
      book.current.pageFlip().flipPrev("bottom"); // Flip to the previous page
      await new Promise((resolve) => setTimeout(resolve, delay)); // Wait for the animation
    }
  };

  useEffect(() => {
    book?.current?.pageFlip()?.turnToPage(10);
  }, [book?.current?.pageFlip()]);

  useEffect(() => {
    console.log(isInView, !flipped);
    if (isInView && !flipped) {
      setShowAnimation(false);

      setTimeout(() => {
        flipPages();
        setFlipped(true);
      }, 2500);
    }
  }, [isInView, flipped]);

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
        <div
          ref={page}
          className="flipbook-container rounded-lg   shadow-2xl z-10 relative outline h-[500px] max-w-[500px]"
        >
          <div className="absolute top-0 -left-1 object-cover opacity-80  z-[1] w-[40px]">
            <img
              style={{ width: width }}
              className=" h-[500px] object-contain max-w-full rounded shadow-xl"
              src={SpiralImage}
              alt="cover"
            />
          </div>
          <HTMLFlipBook
            width={width > 500 ? 500 : width}
            height={300}
            ref={book}
            usePortrait={true} // Enables portrait mode
            mobileScrollSupport={true} // Ensures smooth scrolling on mobile
            startPage={0} // Start from the first page
            showCover={true} // Hide cover if not needed
            direction="ltr" // Flip pages from left to right
            onFlip={(e) => console.log("Page flipped", e)} // Log flip events
            flippingTime={350}
          >
            <div className="demoPage" data-density="hard">
              <img
                style={{ width: width }}
                className=" h-[500px] max-w-full rounded shadow-xl"
                src={CoverImage}
                alt="cover"
              />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer
                imageUrl={GemsImage}
                header="2015"
                text="It all began at Gems Institute of Higher Education.
"
              />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer
                imageUrl={Page2image}
                text="She noticed him through the classroom window...
"
              />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer imageUrl={Page3image} text="started talking..." />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer
                imageUrl={Page4image}
                header="2016"
                text="started Dating
                
"
              />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer imageUrl={GemsImage} text="late night convos ..." />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer
                imageUrl={Page2image}
                header="2024"
                text="popped the question
                
"
              />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer imageUrl={Page2image} text="She said yes" />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer imageUrl={GemsImage} text="Forever in the clouds" />
            </div>
            <div className="demoPage" data-density="hard">
              <ImageViewer
                imageUrl={GemsImage}
                header="2025/02/13"
                text={`Rahul  ♡ Jari`}
              />
            </div>
            <div className="demoPage" data-density="hard">
              <div className="relative page-bg-2 flex-col items-center flex  h-[468px] w-[calc(100%-16px)] p-4 m-4 ml-0 mx-auto  outline">
                <div className="wishing">
                  <h6 className=" py-4 px-14 text-[43px] sm:text-[53px] text-center cursive-text ">
                    Wishing <br /> you guys a happy married life...
                  </h6>
                </div>
                <div className="wishing-shadow"></div>
              </div>
            </div>
          </HTMLFlipBook>
          {/* <BackInTime /> */}
          <img
            style={{ width: width }}
            className=" h-[500px] absolute top-0 -z-[1] max-w-full shadow-xl"
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
