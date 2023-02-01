import { NextPage } from "next";
import MenuList from "../components/menulist";
import MenuLogo from "../components/menulogo";

const MenuBar: NextPage = () => {
  return (
    <>
      <header aria-label="Site Header" className="bg-white dark:bg-gray-900">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <MenuLogo></MenuLogo>
            <MenuList></MenuList>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MenuBar;
