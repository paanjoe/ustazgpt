import { NextPage } from "next";

const Copyright: NextPage = () => {
  const year = new Date().getFullYear();
  return (
    <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right">
      Copyright &copy;{" "}
      <a href="/" className="text-cyan-400 underline hover:text-cyan-200">
        UstazGPT
      </a>{" "}
      {year}. All rights reserved.
    </p>
  );
};

export default Copyright;
