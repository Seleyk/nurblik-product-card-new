import React from "react";
import FirstSlide from "../components/sliderItems/FirstSlide";
import SecondSlide from "../components/sliderItems/SecondSlide";
import ThirdSlide from "../components/sliderItems/ThirdSlide";
import FourthSlide from "../components/sliderItems/FourthSlide";

const Slideshow = () => {
  const array = [
    <FirstSlide />,
    <SecondSlide />,
    <ThirdSlide />,
    <FourthSlide />,
  ];

  return (
    <div>
      <div className="absolute inset-0 flex justify-between z-10">
        <button className="h-12 absolute left-3 top-1/2 flex justify-center items-center">
          <img src="/assets/leftArrow.svg" height={48} width={56} alt="" />
        </button>
      </div>
      <div className="">
        {/* {array.map((i) => (
          <div key={i} className="">
            {i}
          </div>
        ))} */}
        {array[0]}
      </div>
      <button className="h-12 absolute right-3 top-1/2 flex justify-center items-center">
        <img src="/assets/rightArrow.svg" height={48} width={56} alt="" />
      </button>
    </div>
  );
};

export default Slideshow;
