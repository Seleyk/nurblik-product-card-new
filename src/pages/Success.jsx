import React from "react";
import { items } from "../data";

const Success = () => {
  return (
    <div className="w-full relative ">
      <video
        className="w-full h-full object-cover absolute -z-10"
        src="/assets/loginvid.mp4"
        autoPlay
        muted
        loop
      />
      <div className="md:py-20 h-full w-full px-32 max-md:w-full max-md:p-0 flex items-center justify-center">
        <div className="bg-[#F8F7F4] bg-opacity-95 flex max-md:flex-col gap-6 w-[992px] h-[642px] p-8 max-md:h-full max-md:w-full max-md:rounded-[0] max-md:pt-20 rounded-3xl">
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <div className="text-4xl font-semibold uppercase tracking-wider max-md:text-center">
                Thank you!
              </div>
              <div className="text-sm font-semibold uppercase tracking-wide max-md:text-center">
                YOUR ORDER IS NOW BEING PROCESSED. YOU WILL RECEIVE AN EMAIL
                COPY OF YOUR INFORMATION
              </div>
              <div className="flex flex-col">
                <div className="flex mb-4 font-semibold text-lg">
                  Billing Address
                </div>
                <div className="flex text-base">
                  <div className="flex-1 capitalize font-semibold">name</div>
                  <div className="flex-1 capitalize">patience kollie</div>
                </div>
                <div className="flex text-base">
                  <div className="flex-1 capitalize font-semibold">address</div>
                  <div className="flex-1 capitalize">
                    1500 Nicollet Ave s, apt 126, Minneapolis, MN, 55428, United
                    States
                  </div>
                </div>
                <div className="flex text-base">
                  <div className="flex-1 capitalize font-semibold">
                    phone number
                  </div>
                  <div className="flex-1 capitalize">+16124726310</div>
                </div>
                <div className="flex text-base">
                  <div className="flex-1 capitalize font-semibold">
                    email address
                  </div>
                  <div className="flex-1">seleysteven@gmail.com</div>
                </div>
              </div>
              <div className="flex gap-1">
                <div className="flex-1">
                  <button className="cta uppercase">
                    <a href="/profile">
                      <span className="cta-txt">Track your order</span>
                    </a>
                  </button>
                </div>
                <div className="flex-1">
                  <button className="cta uppercase">
                    <a href="/">
                      <span className="cta-txt">back to store</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:overflow-y-auto">
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-semibold tracking-wider uppercase">
                order summary
              </div>
              <div className="flex flex-col gap-4">
                <div className="h-[2px] bg-black w-full"></div>
                <div className="flex flex-col gap-2">
                  <div className="flex">
                    <div className="flex-1 capitalize text-sm text-[#6f6f6f]">
                      date
                    </div>
                    <div className="flex-1 capitalize text-sm text-[#6f6f6f]">
                      order confirmation ID
                    </div>
                  </div>
                  <div className="flex font-semibold">
                    <div className="flex-1 capitalize text-sm">18 Feb 2024</div>
                    <div className="flex-1 capitalize text-sm">
                      65cdfd9951312c85ded44252
                    </div>
                  </div>
                </div>
                <div className="h-[2px] bg-black w-full"></div>
              </div>
              <div className="text-lg font-semibold capitalize">Products</div>
              <div className="flex flex-1 flex-col md:pr-20">
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-4">
                    <div className="min-w-[112px] h-32 bg-black rounded-xl"></div>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-sm tracking-widest uppercase">
                        “OFF-WHITE” X AIR-JORDAN 1
                      </div>
                      <div className="flex gap-2">
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">Size:{" "}</span>
                          {`small`}
                        </div>
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">color:{" "}</span>
                          {`black`}
                        </div>
                      </div>
                      <div className="font-normal text-xs capitalize">
                        <span className="text-[#6f6f6f]">qty:{" "}</span>
                        {1}
                      </div>
                    </div>
                  </div>
                  <div className="h-[2px] bg-black w-full"></div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-4">
                    <div className="min-w-[112px] h-32 bg-black rounded-xl"></div>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-sm tracking-widest uppercase">
                        {items[0].title}
                      </div>
                      <div className="flex gap-2">
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">Size:{" "}</span>
                          {`small`}
                        </div>
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">color:{" "}</span>
                          {`black`}
                        </div>
                      </div>
                      <div className="font-normal text-xs capitalize">
                        <span className="text-[#6f6f6f]">qty:{" "}</span>
                        {3}
                      </div>
                    </div>
                  </div>
                  <div className="h-[2px] bg-black w-full"></div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-4">
                    <div className="min-w-[112px] h-32 bg-black rounded-xl"></div>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-sm tracking-widest uppercase">
                      {items[2].title}
                      </div>
                      <div className="flex gap-2">
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">Size:{" "}</span>
                          {`small`}
                        </div>
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">color:{" "}</span>
                          {`black`}
                        </div>
                      </div>
                      <div className="font-normal text-xs capitalize">
                        <span className="text-[#6f6f6f]">qty:{" "}</span>
                        {1}
                      </div>
                    </div>
                  </div>
                  <div className="h-[2px] bg-black w-full"></div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-4">
                    <div className="min-w-[112px] h-32 bg-black rounded-xl"></div>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-sm tracking-widest uppercase">
                      {items[4].title}
                      </div>
                      <div className="flex gap-2">
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">Size:{" "}</span>
                          {`small`}
                        </div>
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">color:{" "}</span>
                          {`black`}
                        </div>
                      </div>
                      <div className="font-normal text-xs capitalize">
                        <span className="text-[#6f6f6f]">qty:{" "}</span>
                        {1}
                      </div>
                    </div>
                  </div>
                  <div className="h-[2px] bg-black w-full"></div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex gap-4">
                    <div className="min-w-[112px] h-32 bg-black rounded-xl"></div>
                    <div className="flex flex-col gap-2">
                      <div className="font-bold text-sm tracking-widest uppercase">
                      {items[6].title}
                      </div>
                      <div className="flex gap-2">
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">Size:{" "}</span>
                          {`small`}
                        </div>
                        <div className="font-normal text-xs capitalize">
                          <span className="text-[#6f6f6f]">color:{" "}</span>
                          {`black`}
                        </div>
                      </div>
                      <div className="font-normal text-xs capitalize">
                        <span className="text-[#6f6f6f]">qty:{" "}</span>
                        {1}
                      </div>
                    </div>
                  </div>
                  <div className="h-[2px] bg-black w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
