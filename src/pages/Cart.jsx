import React from "react";
import { motion } from "framer-motion";
import { items } from "../data";

const Cart = () => {
  return (
    <div className="pt-24 px-6 flex gap-6 max-md:flex-col">
      <div className="w-[60%] max-md:w-full">
        <h1 className="text-black text-3xl font-bold font-['Roboto'] tracking-widest capitalize">
          Shopping cart ({items.length}){" "}
        </h1>
        <div className="mt-8">
          {items.map((item) => (
            <div key={item.id}>
              <div className="flex gap-4 mt-4">
                <motion.div
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                  className="h-[158px] min-w-[155px] rounded-xl bg-cover bg-no-repeat bg-center "
                />
                <div className="flex flex-auto justify-between max-md:flex-col ">
                  <div className="flex flex-col justify-between">
                    <div className="">
                      <div className="text-black text-lg font-bold font-['Roboto'] tracking-widest uppercase">
                        {item.title}
                      </div>
                      <div className="mt-1 text-[#636363] text-xs font-medium font-['Roboto'] tracking-wide uppercase">
                        {["shoes", "sneakers"].map((i) => (
                          <span key={i}>
                            /<>{`${i} `}</>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex max-md:flex-row flex-col gap-2 max-md:mb-2">
                      <div className="text-xs font-medium font-['Roboto'] tracking-wide capitalize">
                        <span className="text-[#636363] capitalize">
                          Color:
                        </span>{" "}
                        {`Blue`}
                      </div>
                      <div className="text-xs font-medium font-['Roboto'] tracking-wide capitalize">
                        <span className="text-[#636363] capitalize">
                          Color:
                        </span>{" "}
                        {`Blue`}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="">
                        <img width={25} src="/assets/heart.svg" alt="H" />
                      </button>
                      <button className="">
                        <img width={25} src="/assets/trash.svg" alt="T" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-end justify-between max-md:flex-row-reverse max-md:items-center flex-col">
                    <div className="text-black text-lg font-bold font-['Roboto'] tracking-widest">
                      ${item.price / 100}
                    </div>
                    <div className="flex gap-3">
                      <button className="">
                        <img width={20} src="/assets/minus.svg" alt="-" />
                      </button>
                      <div className="text-sm font-medium">2</div>
                      <button className="">
                        <img width={20} src="/assets/plus.svg" alt="+" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black h-[1.5px] w-full mt-4"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] max-md:w-full mb-4">
        <h1 className="max-md:text-center text-black text-3xl font-bold font-['Roboto'] tracking-widest">
          Summary
        </h1>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="text-black max-md:text-xs text-sm font-medium font-['Roboto'] tracking-wide capitalize">
              order summary
            </span>
            <span className="text-black max-md:text-xs text-sm font-bold font-['Roboto'] tracking-wide">
              ${48365 / 100}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-black max-md:text-xs text-sm font-medium font-['Roboto'] tracking-wide capitalize">
              est. shipping & handling
            </span>
            <span className="text-black max-md:text-xs text-sm font-bold font-['Roboto'] tracking-wide">
              ${1500 / 100}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-black max-md:text-xs text-sm font-medium font-['Roboto'] tracking-wide capitalize">
              est. taxes
            </span>
            <span className="text-black max-md:text-xs text-sm font-bold font-['Roboto'] tracking-wide">
              ${2529 / 100}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-52">
          <div className="bg-black h-[1.5px] w-full"></div>
          <div className="flex justify-between">
            <span className="text-black text-lg font-semibold font-['Roboto'] tracking-widest capitalize">
              total
            </span>
            <span className="text-black text-lg font-semibold font-['Roboto'] tracking-widest">
              ${52394 / 100}
            </span>
          </div>
          <button className="cta">
            <span className="cta-txt">Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
