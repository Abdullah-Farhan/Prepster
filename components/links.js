"use client";
import React from "react";
import Image from "next/image";
import instagram from "@/assets/svg/insta.svg";
import linkedin from "@/assets/svg/linkedin.svg";
import facebook from "@/assets/svg/facebook.svg";

const links = () => {
  return (
    <>
      <Image
        src={instagram}
        alt="instagram"
        className="cursor-pointer"
        onClick={() => window.open("https://www.instagram.com/", "_blank")}
      />
      <Image
        src={linkedin}
        alt="linkedin"
        className="cursor-pointer"
        onClick={() => window.open("https://www.linkedin.com/", "_blank")}
      />
      <Image
        src={facebook}
        alt="facebook"
        className="cursor-pointer"
        onClick={() => window.open("https://www.facebook.com/", "_blank")}
      />
    </>
  );
};

export default links;
