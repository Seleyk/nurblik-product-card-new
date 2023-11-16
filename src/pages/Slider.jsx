import { useState } from "react";
import { motion } from "framer-motion";
import { items } from "../data";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    handleClick(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const handleBack = () => {
    handleClick(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const imageVariants = {};
  return (
    // <div className=" flex-col p-0 justify-center bg-black h-[900px] flex items-center overflow-hidden place-items-center w-full relative">
    <div className=" h-[900px] w-full flex flex-col place-content-center items-center gap-0 p-0 relative overflow-hidden ">
      <div className=" flex-[0_0_auto] h-[700px] width-full overflow-hidden  ">
        <div className=" opacity-100 h-[600px] w-[800px] absolute top-[calc(50%-300px)] left-[calc(50%-400px)]">
          <section>
            <div className="w-full h-full absolute inset-0 overflow-visible">
              <div className="flex flex-row w-full h-full max-w-full max-h-full place-items-center m-0 p-0 opacity-100">
                <div className="flex flex-row gap-3 ">
                  {items.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image.img}
                      alt={image.title}
                      className=" object-cover w-full "
                      initial="center"
                      // animate={positions[positionIndexes[index]]}
                      // variants={imageVariants}
                      // transition={transition}
                      // style={{ width: "40%", position: "absolute" }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className=""></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Slider;
