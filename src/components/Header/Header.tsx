import React from "react";
import profilePic from "../../../public/assets/images/accounts-profile.png";
import Image from "next/image";

const Header = (props) => {
  const { breadcrumb1 = "", breadcrumb2 = "" } = props || {};
  return (
    <div className="w-full flex justify-between px-[32px] py-4 border-[#E1E1E5] border-b">
      <div className="flex gap-2">
        <span className="pr-1 text-xl text-[#6B7785]">
          {breadcrumb1} {"/"}
        </span>
        <span className="text-xl font-medium">{breadcrumb2}</span>
      </div>
      <div className="flex gap-2.5 rounded-[353px]">
        <Image
          loading="lazy"
          src={profilePic}
          alt="profile"
          className="object-contain shrink-0 w-7 aspect-square rounded-[353px]"
        />
        <div className="flex flex-col self-start">
          <div className="self-start text-xs font-semibold text-neutral-800">
            Admin
          </div>
          <div className="text-xs font-medium text-gray-500">
            admin@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
