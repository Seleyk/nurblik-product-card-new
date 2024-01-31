import React from "react";

const Cart = () => {
  return (
    <div className="pt-24 px-6 flex gap-6 max-md:flex-col">
      <div className="w-[60%] max-md:w-full">
        <h1>Shopping cart</h1>
        <div className="mt-8">
          <>
            <div className="flex gap-4 mt-4">
              <div className="h-[158px] w-[155px] rounded-xl bg-black"></div>
              <div className="flex flex-auto justify-between max-md:flex-col ">
                <div className="flex flex-col justify-between">
                  <div className="">
                    <div className="">title</div>
                    <div className="mt-2 uppercase">subtitle</div>
                  </div>
                  <div className="">
                    <div className="">Color: {`Blue`}</div>
                    <div className="mt-2">Color: {`Blue`}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="">H</div>
                    <div className="">D</div>
                  </div>
                </div>
                <div className="flex justify-between max-md:flex-row-reverse flex-col">
                  <div className="">$Price</div>
                  <div className="flex gap-3">
                    <div className="">-</div>
                    <div className="">2</div>
                    <div className="">+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black h-[1.5px] w-full mt-4"></div>
          </>
        </div>
      </div>
      <div className="w-[40%] max-md:w-full">
        <h1 className="max-md:text-center">Summary</h1>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex justify-between">
            <span className="">answer</span>
            <span>yes</span>
          </div>
          <div className="flex justify-between">
            <span className="">answer</span>
            <span>yes</span>
          </div>
          <div className="flex justify-between">
            <span className="">answer</span>
            <span>yes</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-52">
          <div className="bg-black h-[1.5px] w-full"></div>
          <div className="flex justify-between">
            <span className="">answer</span>
            <span>yes</span>
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
