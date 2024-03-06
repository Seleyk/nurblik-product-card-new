import React from "react";

const Profile = () => {
  return (
    <div className="p-20 max-md:px-10">
      <div className="my-5 w-full flex justify-between items-baseline">
        <div className="font-bold text-3xl">Hello {`Patience`}</div>
        <div className="hover:underline capitalize cursor-pointer"> Logout</div>
      </div>
      <div className="flex flex-col gap-2 pb-4">
        <div className="flex max-md:flex-col gap-2 md:h-40 h-80">
          <div className=" bg-[#FFFDFA] p-4 border-solid border-2 flex-1 rounded-3xl h-40">
            <div className=" w-24 h-24 rounded-full overflow-auto border-[3px] border-black relative">
              <img src="/assets/headshot.jpg" className="image" alt="Sei" />
            </div>
          </div>
          <div className=" bg-[#FFFDFA] p-4 border-solid border-2 flex-1 rounded-3xl h-40">.</div>
        </div>
        <div className="flex max-md:flex-col gap-2 md:h-40 h-80">
          <div className=" bg-[#FFFDFA] p-4 border-solid border-2 flex-1 rounded-3xl h-40">.</div>
          <div className=" bg-[#FFFDFA] p-4 border-solid border-2 flex-1 rounded-3xl h-40">.</div>
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
