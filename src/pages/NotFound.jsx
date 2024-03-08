import React from "react";
import { items } from "../data";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-40 mb-20">
      <div className="max-md:text-3xl text-6xl font-bold max-md:px-8 px-96 text-center mb-6">
        We’re sorry, the page you are looking for was not found.
      </div>
      <div className="max-md:w-1/2 w-1/3 mx-auto mb-32">
        <button className="cta uppercase">
          <a href="/profile">
            <span className="cta-txt">go Back to the shop</span>
          </a>
        </button>
      </div>
      <div className="flex max-md:flex-col items-center justify-center gap-12">
        <div className="flex items-center relative w-[350px] h-[380px] rounded-xl">
          <img
            className="image bg-black rounded-xl z-10"
            src={items[0].img}
            alt="k"
          />
          <div className="h-full w-full bg-black rounded-xl opacity-20 absolute z-20"></div>
          <div className="p-4 h-full w-full flex flex-col justify-between items-between absolute z-30">
            <div className="max-w-[250px] tracking-wider text-white text-normal font-lg">
              SHOP THE “OFF-WHITE ” COLLECTION
            </div>
            <Link
              className="text-end"
              to={"/cards"}
            >
              <button class="btn-1 max-w-[180px]">
                <span className="flex items-center justify-center gap-2.5">
                  <div className="text-white tracking-wider font-normal">SHOP NOW</div>
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
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center relative w-[350px] h-[380px] rounded-xl">
          <img
            className="image bg-black rounded-xl z-10"
            src={items[14].img}
            alt="k"
          />
          <div className="h-full w-full bg-black rounded-xl opacity-20 absolute z-20"></div>
          <div className="p-4 h-full w-full flex flex-col justify-between items-between absolute z-30">
            <div className="max-w-[250px] tracking-wider text-white text-normal font-lg">
              SHOP THE “OFF-WHITE ” COLLECTION
            </div>
            <Link
              className="text-end"
              to={"/cards"}
            >
              <button class="btn-1 max-w-[180px]">
                <span className="flex items-center justify-center gap-2.5">
                  <div className="text-white tracking-wider font-normal">SHOP NOW</div>
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
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center relative w-[350px] h-[380px] rounded-xl">
          <img
            className="image bg-black rounded-xl z-10"
            src={items[13].img}
            alt="k"
          />
          <div className="h-full w-full bg-black rounded-xl opacity-20 absolute z-20"></div>
          <div className="p-4 h-full w-full flex flex-col justify-between items-between absolute z-30">
            <div className="max-w-[250px] tracking-wider text-white text-normal font-lg">
              SHOP THE “OFF-WHITE ” COLLECTION
            </div>
            <Link
              className="text-end"
              to={"/cards"}
            >
              <button class="btn-1 max-w-[180px]">
                <span className="flex items-center justify-center gap-2.5">
                  <div className="text-white tracking-wider font-normal">SHOP NOW</div>
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
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
