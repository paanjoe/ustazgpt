import { NextPage } from "next";
import MenuList from "../components/menulist";
import MenuLogo from "../components/menulogo";

const MenuBar: NextPage = () => {
  return (
    <div>
      <header aria-label="Site Header" className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <MenuLogo></MenuLogo>
            <MenuList></MenuList>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MenuBar;
