import { NextPage } from "next";

const HeroTitle: NextPage = () => {
  return (
    <>
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
        UstazGPT
      </h1>
      <p className="mx-auto mt-4 sm:text-lg text-gray-900 dark:text-white  sm:leading-relaxed">
        Made with ❤️{" "}
        <a
          href="https://www.linkedin.com/in/mohd-farhan-muhamad-fazli-693b7912b/"
          target={"_blank"}
          className="text-sky-400 underline hover:text-sky-200"
        >
          @FarhanFazli
        </a>
      </p>
    </>
  );
};

export default HeroTitle;
