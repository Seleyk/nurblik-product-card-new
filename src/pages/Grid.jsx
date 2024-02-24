import { useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Grid = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)");
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
  const transition2 = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };

  return isNonMobileScreen ? (
    <div className="px-32 pb-5 bg-[#F8F7F4]">
      <div className="pt-20 self-center w-full flex items-center justify-center uppercase text-[32px] font-semibold tracking-[3.20px]">
        popular collections
      </div>
      <div className="w-full h-[45rem] mt-9 grid grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-rows-2 gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileInView={{ opacity: [0, 1], scale: [1.3, 1] }}
              transition={{ delay: 0.25, ...transition }}
              className="relative max-h-[350px] overflow-hidden bg-[#6f6f6f] cursor-pointer"
            >
              <div className="absolute z-50 left-6 top-6 uppercase text-base font-semibold tracking-widest">
                Spring 2023
              </div>
              <div className="absolute z-50 bottom-5 right-4">
                <Link
                  className="flex justify-center items-center z-40"
                  to={"/cards"}
                >
                  <button class="btn-1 max-w-[180px]">
                    <span className="flex items-center justify-center gap-2.5">
                      <div className="">SHOP NOW</div>
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
                </Link>
              </div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ delay: 0.25, ...transition2 }}
                src="https://i.pinimg.com/564x/a3/a7/df/a3a7df081d8ab8ef3ca350d44fa903f2.jpg"
                alt=""
                className="h-full w-full bg-cover bg-no-repeat"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1], scale: [1.3, 1] }}
              transition={{ delay: 0.35, ...transition }}
              className="relative max-h-[350px] overflow-hidden bg-[#6f6f6f] cursor-pointer"
            >
              <div className="absolute z-50 left-6 top-6 uppercase text-base font-semibold tracking-widest">
                90's fashion
              </div>
              <div className="absolute z-50 bottom-5 right-4">
                <Link
                  className="flex justify-center items-center z-40"
                  to={"/cards"}
                >
                  <button class="btn-1 max-w-[180px]">
                    <span className="flex items-center justify-center gap-2.5">
                      <div className="text-[#F8F7F4]">SHOP NOW</div>
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
                          fill="#F8F7F4"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ delay: 0.25, ...transition2 }}
                src="/assets/grid2.png"
                alt=""
                className="h-full w-full bg-cover bg-no-repeat"
              />
            </motion.div>
          </div>
          <motion.div
            whileInView={{ opacity: [0, 1], scale: [1.3, 1] }}
            transition={{ delay: 0.35, ...transition }}
            className="relative max-h-[350px] overflow-hidden bg-black cursor-pointer"
          >
            <div className="absolute z-50 left-6 top-6 uppercase text-base font-semibold tracking-widest">
              Spring 2023
            </div>
            <div className="absolute z-50 bottom-5 right-4">
              <Link
                className="flex justify-center items-center z-40"
                to={"/cards"}
              >
                <button class="btn-1 max-w-[180px]">
                  <span className="flex items-center justify-center gap-2.5">
                    <div className="text-[#F8F7F4]">SHOP NOW</div>
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
                        fill="#F8F7F4"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{ delay: 0.25, ...transition2 }}
              src="/assets/grid5.jpg"
              alt=""
              className="h-full w-full bg-cover bg-no-repeat"
            />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: [0, 1], scale: [1.3, 1] }}
          transition={{ delay: 0.35, ...transition }}
          className="relative max-h-[720px] col-span-1 overflow-hidden bg-black cursor-pointer"
        >
          <div className="absolute z-50 left-6 top-6 uppercase text-base font-semibold tracking-widest">
            Techwear Collection
          </div>
          <div className="absolute z-50 bottom-5 right-4">
            <Link
              className="flex justify-center items-center z-40"
              to={"/cards"}
            >
              <button class="btn-1 max-w-[180px]">
                <span className="flex items-center justify-center gap-2.5">
                  <div className="">SHOP NOW</div>
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
            </Link>
          </div>
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ delay: 0.25, ...transition2 }}
            src="/assets/grid.jpg"
            alt=""
            className="h-full w-full bg-cover bg-no-repeat"
          />
        </motion.div>
      </div>
    </div>
  ) : (
    <div className="w-full">
      <div className="h-[103dvh] relative bg-slate-300">
        <div className="absolute z-50 left-6 top-6 uppercase text-base font-semibold tracking-widest">
          Fall 2023
        </div>
        <div className="absolute z-50 bottom-5 right-4">
          <Link className="flex justify-center items-center z-40" to={"/cards"}>
            <button class="btn-1 max-w-[180px]">
              <span className="flex items-center justify-center gap-2.5">
                <div className="">SHOP NOW</div>
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
          </Link>
        </div>
        <img
          src="https://i.pinimg.com/564x/a3/a7/df/a3a7df081d8ab8ef3ca350d44fa903f2.jpg"
          alt=""
          className="h-full w-full bg-cover bg-no-repeat"
        />
      </div>
      <div className="h-[103dvh] relative bg-slate-300">
        <div className="absolute z-50 left-6 top-6 uppercase text-base font-semibold tracking-widest">
          Techwear Collection
        </div>
        <div className="absolute z-50 bottom-5 right-4">
          <Link className="flex justify-center items-center z-40" to={"/cards"}>
            <button class="btn-1 max-w-[180px]">
              <span className="flex items-center justify-center gap-2.5">
                <div className="">SHOP NOW</div>
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
          </Link>
        </div>
        <img
          src="/assets/grid.jpg"
          alt=""
          className="h-full w-full bg-cover bg-no-repeat"
        />
      </div>
      <div className="h-[103dvh] relative bg-slate-300">
        <div className="absolute z-50 left-6 top-6 uppercase text-base font-semibold tracking-widest">
          90's Fashion
        </div>
        <div className="absolute z-50 bottom-5 right-4">
          <Link className="flex justify-center items-center z-40" to={"/cards"}>
            <button class="btn-1 max-w-[180px]">
              <span className="flex items-center justify-center gap-2.5">
                <div className="">SHOP NOW</div>
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
          </Link>
        </div>
        <img
          src="/assets/superstack.png"
          alt=""
          className="h-full w-full bg-cover bg-no-repeat"
        />
      </div>
      <div className="h-[103dvh] relative bg-slate-300">
        <div className="absolute z-50 left-6 top-6 uppercase text-base font-semibold tracking-widest">
          Spring 2023
        </div>
        <div className="absolute z-50 bottom-5 right-4">
          <Link className="flex justify-center items-center z-40" to={"/cards"}>
            <button class="btn-1 max-w-[180px]">
              <span className="flex items-center justify-center gap-2.5">
                <div className="">SHOP NOW</div>
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
          </Link>
        </div>
        <img
          src="/assets/Hotpot.png"
          alt=""
          className="h-full w-full bg-cover bg-no-repeat"
        />
      </div>
    </div>
  );
};

export default Grid;
