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
import Page2image from "./images/page2.png";
import Page3image from "./images/page3.png";
import Page4image from "./images/date.png";
import FlowerImage from "./images/flower.png";
import Collage from "./images/collageu.png";
import Collage2 from "./images/collag2.png";
import Collage3 from "./images/collage3.png";
import Collage4 from "./images/collage4.png";
import Collage1 from "./images/collage1.png";
import Popped from "./images/popped-car.png";
import Yes from "./images/yes.png";
import Guffy from "./images/guffy.png";
import Cloud from "./images/cloud.png";
import Genius from "./images/genius.png";
import RaulJari from "./images/rauljari.png";

import AnimatedSvg from "./components/AnimatedSvg";
import { CollageViewer } from "./components/CollageViewer";
import ImageViewerWithPinned from "./components/ImageViewerWithPinned";

const ScrollComponent = ({ scrollPosition }) => {
  return (
    <div className="fixed text-[#fffbf7] flex items-center justify-center bottom-0 py-1 whitespace-nowrap font-bold uppercase rounded-t-xl px-4 bg-[#dea193] z-50 -translate-x-1/2 left-1/2">
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
const SwipeComponent = ({ scrollPosition }) => {
  return (
    <div className="fixed text-[#fffbf7] flex z-50 items-center justify-center bottom-2 py-1 whitespace-nowrap font-bold uppercase  px-4  -translate-x-1/2 left-1/2">
      swipe to turn pages
      <div className="swipe" />
    </div>
  );
};

const TOTAL_PAGE = 11;

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollableDivRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [showAnimation, setShowAnimation] = useState(true);
  const [showSwiper, setShowSwiper] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

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
    book?.current?.pageFlip()?.turnToPage(TOTAL_PAGE);
  }, [book?.current?.pageFlip()]);

  useEffect(() => {
    setCurrentPage(book?.current?.pageFlip()?.getCurrentPageIndex());
  }, [book?.current?.pageFlip()?.getCurrentPageIndex()]);

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
      {scrollPosition < 500 && (
        <ScrollComponent scrollPosition={scrollPosition} />
      )}
      {showSwiper && scrollPosition > 500 && (
        <SwipeComponent scrollPosition={scrollPosition} />
      )}
      <SpinnerComponent scrollPosition={scrollPosition} />

      <div className="flex flex-col items-center justify-center h-screen text-white desk-bg snap-start">
        <div className="book-shadow">
          <div
            ref={page}
            className="flipbook-container rounded-lg shadow-2xl z-10 relative  h-[500px] max-w-[500px]"
          >
            <div className="absolute top-0  -left-1 object-cover opacity-80  z-[1] w-[40px]">
              <div
                className="bok-after"
                onClick={() => book.current.pageFlip().flipPrev("top")}
              />{" "}
              <img
                style={{ width: width }}
                className=" h-[500px] object-contain max-w-full  rounded shadow-xl"
                src={SpiralImage}
                alt="cover"
              />
            </div>

            {!showSwiper && (
              <div
                className={`absolute top-0 flex items-center justify-center opacity-30  h-full  !z-[1000] w-full ${
                  currentPage == TOTAL_PAGE ? " !opacity-0" : ""
                } `}
              >
                <BackInTime />
              </div>
            )}
            <HTMLFlipBook
              width={width > 500 ? 500 : width}
              height={300}
              ref={book}
              usePortrait={true} // Enables portrait mode
              mobileScrollSupport={true} // Ensures smooth scrolling on mobile
              startPage={0} // Start from the first page
              showCover={true} // Hide cover if not needed
              direction="ltr" // Flip pages from left to right
              onFlip={(e) => {
                if (e?.data === 1) {
                  setShowSwiper(true);
                }
                setCurrentPage(e?.data);
              }} // Log flip events
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
                <ImageViewer
                  imageUrl={Genius}
                  background="h-[180px] relative"
                  className="!h-[250px] !w-[300px] block  !max-h-[250px] -translate-y-[70px]  bottom-0"
                  text="And she made her presence known — just enough
"
                />
              </div>
              <div className="demoPage" data-density="hard">
                <ImageViewerWithPinned
                  imageUrl={Page4image}
                  pinImage={Guffy}
                  text="They started talking, awkward small talk turning into banter and laughs."
                />
              </div>
              <div className="demoPage" data-density="hard">
                <ImageViewerWithPinned
                  pinImage={Page3image}
                  imageUrl={FlowerImage}
                  header="2016"
                  text="They started dating, realizing they were basically a perfect mess together
                
"
                />
              </div>

              <div className="demoPage" data-density="hard">
                <CollageViewer
                  image1={Collage1}
                  image2={Collage2}
                  image3={Collage3}
                  image4={Collage4}
                  text="After many trips and many years, and countless heartfelt experiences later..."
                />
                {/* <ImageViewer
                imageUrl={Collage}
                text="After many trips and many years, and countless heartfelt experiences later..."
              /> */}
              </div>
              <div className="demoPage" data-density="hard">
                <ImageViewer
                  imageUrl={Popped}
                  header="2024"
                  className="!max-h-[220px]"
                  textClass="!pb-1 !mt-2 "
                  text="Finally!!! </br> He popped the question.
                
"
                />
              </div>
              <div className="demoPage" data-density="hard">
                <ImageViewer
                  className={" !max-h-[280px]"}
                  imageUrl={Yes}
                  text="She said yes!!"
                />
              </div>
              <div className="demoPage" data-density="hard">
                <ImageViewer
                  className={" !max-h-[250px]"}
                  textClass={"!p-2"}
                  imageUrl={Cloud}
                  text="This story will forever remain in the cloud as a testament to your love for each other.."
                />
              </div>
              <div className="demoPage" data-density="hard">
                <ImageViewer
                  imageUrl={RaulJari}
                  header="2025/02/13"
                  text={`Rahul  ♡ Jari`}
                />
              </div>
              <div className="demoPage" data-density="hard">
                <div className="relative page-bg-2 flex-col items-center flex  h-[468px] w-[calc(100%-16px)] p-4 m-4 ml-0 mx-auto  outline">
                  <div className="flex items-center wishing">
                    <h6 className=" py-4 pl-10 pr-14 text-[43px]  sm:text-[53px] flex text-center cursive-text ">
                      Congratulations on your <br></br> Forever after
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
      </div>
      <div className="text-white snap-start"></div>
    </div>
  );
}

export default App;
