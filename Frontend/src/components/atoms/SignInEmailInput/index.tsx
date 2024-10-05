import React from "react";
import { MdMailLock } from "react-icons/md";

export const SignInEmailInput: React.FC = () => {
  return (
    <div className="flex p-2 px-4 border-[0.5px] border-[#37474F] rounded-md w-full h-full gap-3">
      <MdMailLock size={28} className="" />
      <input
        type="email"
        placeholder="example@gmail.com"
        className="text-base w-full placeholder:text-sm outline-none placeholder:opacity-75 bg-transparent"
        required
      />
    </div>
  );
};
