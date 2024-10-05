import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsEnvelope } from "react-icons/bs";
import { ContinueWithProps } from "./types";

export const continueWithData: ContinueWithProps[] = [
  {
    icon: <FaFacebook size={28} />, // Correct 'Size' to 'size'
    btnLabel: "Continue with Facebook",
  },
  {
    icon: <FcGoogle size={28} />, // Correct 'Size' to 'size'
    btnLabel: "Continue with Google",
  },
  {
    icon: <BsEnvelope size={28} />, // Correct 'Size' to 'size'
    btnLabel: "Continue with Email",
  },
];
