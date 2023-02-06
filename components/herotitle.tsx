import { NextPage } from "next";
import HeroLogo from "./herologo";

const HeroTitle: NextPage = () => {
  return (
    <>
      <HeroLogo></HeroLogo>
      <h1 className="flex mx-auto sm:justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
        UstazGPT
      </h1>
    </>
  );
};

export default HeroTitle;
