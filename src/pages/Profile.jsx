import { useMediaQuery } from "@mui/material";
import React from "react";
import { items } from "../data";

const Profile = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");

  return (
    <div className="p-20 max-md:px-10">
      <div className="my-5 w-full flex justify-between items-baseline">
        <div className="font-bold text-3xl">Hello {`Patience`}</div>
        <div className="hover:underline capitalize cursor-pointer"> Logout</div>
      </div>
      <div className="flex flex-col gap-2 pb-4">
        <div className="flex max-md:flex-col gap-2 md:h-40 h-80">
          <div className="bg-[#FFFDFA] p-4 border-solid border-2 flex-1 rounded-3xl h-40">
            <div className="flex max-md:flex-col justify-between h-full gap-2">
              <div className="flex gap-6">
                <div className="w-24 max-md:w-20 h-24 max-md:h-20 rounded-full overflow-auto border-[3px] border-black relative">
                  <img src="/assets/headshot.jpg" className="image" alt="Sei" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-2xl max-lg:text-lg font-semibold tracking-wide capitalize">
                    patience kollie
                  </div>
                  <div className="text-sm font-normal">patience@gmail.com</div>
                </div>
              </div>
              <div className="flex items-end">
                <div className="flex-1">
                  <button class="btn-1">
                    <span className="flex items-center justify-center gap-2.5">
                      <div className="">
                        View {isNonMobileScreen && `Personal Information`}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        className="arrow"
                      >
                        <path
                          d="M7.793 0.799012C7.98053 0.611541 8.23484 0.506226 8.5 0.506226C8.76516 0.506226 9.01947 0.611541 9.207 0.799012L13.707 5.29901C13.8945 5.48654 13.9998 5.74085 13.9998 6.00601C13.9998 6.27118 13.8945 6.52548 13.707 6.71301L9.207 11.213C9.0184 11.3952 8.7658 11.496 8.5036 11.4937C8.2414 11.4914 7.99059 11.3862 7.80518 11.2008C7.61977 11.0154 7.5146 10.7646 7.51233 10.5024C7.51005 10.2402 7.61084 9.98761 7.793 9.79901L10.5 7.00601H1C0.734784 7.00601 0.48043 6.90065 0.292893 6.71312C0.105357 6.52558 0 6.27123 0 6.00601C0 5.7408 0.105357 5.48644 0.292893 5.29891C0.48043 5.11137 0.734784 5.00601 1 5.00601H10.5L7.793 2.21301C7.60553 2.02548 7.50021 1.77118 7.50021 1.50601C7.50021 1.24085 7.60553 0.98654 7.793 0.799012Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#FFFDFA] p-4 border-solid border-2 flex-1 rounded-3xl h-40 flex flex-col gap-2 ">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src="/assets/heart.svg" alt="8" width={24} />
                <div className="text-2xl max-lg:text-lg font-semibold tracking-wide capitalize">
                  Your Favorites
                </div>
              </div>
              <div className="hover:underline cursor-pointer capitalize text-xs">
                View All
              </div>
            </div>
            <div className="flex gap-2">
              <div className="bg-black w-16 h-20 rounded-lg relative">
                <img src={items[0].img} className="image rounded-lg" alt="" />
              </div>
              <div className="bg-black w-16 h-20 rounded-lg relative">
                <img src={items[1].img} className="image rounded-lg" alt="" />
              </div>
              <div className="bg-black w-16 h-20 rounded-lg relative">
                <img src={items[2].img} className="image rounded-lg" alt="" />
              </div>
              <div className="bg-black w-16 h-20 rounded-lg relative">
                <img src={items[3].img} className="image rounded-lg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col gap-2 md:h-40 h-80">
          <div className=" bg-[#FFFDFA] p-4 border-solid border-2 flex-1 rounded-3xl h-40 flex flex-col gap-2 overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <img src="/assets/bag.svg" alt="8" width={24} />
                <div className="text-2xl max-lg:text-lg font-semibold tracking-wide capitalize">
                  Your Orders
                </div>
              </div>
              <div className="hover:underline cursor-pointer capitalize text-xs">
                View All
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex item-center gap-2">
                <div className="bg-black w-16 h-20 rounded-lg relative">
                  <img src={items[0].img} className="image rounded-lg" alt="" />
                </div>
                <div className="text-lg font-normal tracking-wide h-full flex items-center">
                  +15
                </div>
              </div>
              <div className="flex item-center gap-2">
                <div className="bg-black w-16 h-20 rounded-lg relative">
                  <img src={items[1].img} className="image rounded-lg" alt="" />
                </div>
                <div className="text-lg font-normal tracking-wide h-full flex items-center">
                  +15
                </div>
              </div>
              {isNonMobileScreen && (
                <>
                  <div className="flex item-center gap-2">
                    <div className="bg-black w-16 h-20 rounded-lg relative">
                      <img
                        src={items[2].img}
                        className="image rounded-lg"
                        alt=""
                      />
                    </div>
                    <div className="text-lg font-normal tracking-wide h-full flex items-center">
                      +15
                    </div>
                  </div>
                  <div className="flex item-center gap-2">
                    <div className="bg-black w-16 h-20 rounded-lg relative">
                      <img
                        src={items[3].img}
                        className="image rounded-lg"
                        alt=""
                      />
                    </div>
                    <div className="text-lg font-normal tracking-wide h-full flex items-center">
                      +15
                    </div>
                  </div>{" "}
                </>
              )}
            </div>
          </div>
          <div className=" p-4 flex-1 rounded-3xl h-40 flex justify-end items-center">
            <div className="flex gap-2 h-full items-center">
              View profile settings{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                className="arrow"
              >
                <path
                  d="M7.793 0.799012C7.98053 0.611541 8.23484 0.506226 8.5 0.506226C8.76516 0.506226 9.01947 0.611541 9.207 0.799012L13.707 5.29901C13.8945 5.48654 13.9998 5.74085 13.9998 6.00601C13.9998 6.27118 13.8945 6.52548 13.707 6.71301L9.207 11.213C9.0184 11.3952 8.7658 11.496 8.5036 11.4937C8.2414 11.4914 7.99059 11.3862 7.80518 11.2008C7.61977 11.0154 7.5146 10.7646 7.51233 10.5024C7.51005 10.2402 7.61084 9.98761 7.793 9.79901L10.5 7.00601H1C0.734784 7.00601 0.48043 6.90065 0.292893 6.71312C0.105357 6.52558 0 6.27123 0 6.00601C0 5.7408 0.105357 5.48644 0.292893 5.29891C0.48043 5.11137 0.734784 5.00601 1 5.00601H10.5L7.793 2.21301C7.60553 2.02548 7.50021 1.77118 7.50021 1.50601C7.50021 1.24085 7.60553 0.98654 7.793 0.799012Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 flex flex-col gap-3">
        <div className="font-bold text-3xl capitalize">Your Orders</div>
        <div className="flex gap-3">
          <div className="font-normal text-base capitalize hover:underline cursor-pointer">
            Completed Orders (0)
          </div>
          <div className="font-normal text-base capitalize hover:underline cursor-pointer">
            All Orders (0)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
