import Image from "next/image";
import React from "react";
import logo from "@/assets/svg/logo.svg";
import EmailInput from "@/components/emailinput";
import hero from "@/assets/svg/hero.svg";
import Links from "@/components/links";
const page = () => {
  return (
    <div className="py-16 px-8 md:py-20 lg:px-32 flex">
      <div className="bg-[#265DF7] w-40 h-40 ml-32 rounded-full absolute blur-[150px] -mt-40 -z-0"></div>
      <section className="lg:max-w-7/12">
        <Image src={logo} alt="prepster logo" />
        <p className="font-bold text-3xl md:text-4xl mt-7 md:mt-10 mb-7 md:mb-10">
          Sign up now to be the first to access Prepster and{" "}
          <span className="text-[#265DF7]">revolutionize</span> your exam
          preparation!
        </p>
        <p className="text-[#151C2D] font-semibold opacity-60 mb-2">
          Your Email
        </p>
        <div className="w-3/4">
          <EmailInput />
        </div>
        <div className="bg-[#265DF7] w-40 h-40 -ml-10 -mt-4 rounded-full absolute blur-[200px] -z-0"></div>
        <p className="font-semibold text-[#151C2D] opacity-60 mt-11 mb-2">
          FOLLOW US
        </p>
        <div className="flex space-x-2.5">
          <Links />
        </div>
      </section>

      <section className="hidden lg:block">
        <div className="bg-[#265DF7] w-40 h-40 ml-40 rounded-full absolute blur-[120px] mt-32 -z-0"></div>
        <Image src={hero} alt="hero" className="relative z-50" />
      </section>
    </div>
  );
};

export default page;
