import React from "react";

const Cart = () => {
  return (
    <div className="pt-24 px-6 flex gap-6 max-md:flex-col">
      <div className="w-[60%] max-md:w-full">
        <h1>Shopping cart</h1>
        <div className="mt-8">items</div>
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
        <div className="flex flex-col gap-3 mt-20">
          <div className="bg-black h-[1.5px] w-full"></div>
          <div className="flex justify-between">
            <span className="">answer</span>
            <span>yes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
