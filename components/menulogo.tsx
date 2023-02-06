import { NextPage } from "next";

const MenuLogo: NextPage = () => {
  return (
    <div className="flex-1 md:flex md:items-center md:gap-12">
      <a
        className="text-teal-600 dark:text-teal-300 flex sm:justify-center"
        href="/"
      >
        <div className="inline-flex justify-between items-center"></div>
        <div className="inline-flex sm:text-center md:justify-between items-center ml-5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl sm:text-xl font-extrabold text-transparent">
          UstazGPT
        </div>
      </a>
    </div>
  );
};

export default MenuLogo;
