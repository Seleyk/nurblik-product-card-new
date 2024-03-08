import React from "react";

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
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              <div className="text-2xl font-semibold tracking-wider uppercase">
                order summary
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
