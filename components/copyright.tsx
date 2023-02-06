import { NextPage } from "next";

const Copyright: NextPage = () => {
  const year = new Date().getFullYear();
  return (
    <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right">
      Copyright &copy;{" "}
      <a href="/" className="text-cyan-400 underline hover:text-cyan-200">
        UstazGPT
      </a>{" "}
      {year}. All rights reserved. Made with ❤️ &nbsp;
      <a
        href="https://www.linkedin.com/in/mohd-farhan-muhamad-fazli-693b7912b/"
        target={"_blank"}
        className="text-cyan-400 underline hover:text-cyan-200"
      >
        @FarhanFazli
      </a>
      &nbsp; & &nbsp;
      <a
        href="https://www.linkedin.com/in/shinjichew/"
        target={"_blank"}
        className="text-cyan-400 underline hover:text-cyan-200"
      >
        @ShinjiChew
      </a>
    </p>
  );
};

export default Copyright;
