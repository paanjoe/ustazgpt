import { NextPage } from "next";
import MenuList from "../components/menulist";
import MenuLogo from "../components/menulogo";
import Anchor from "../components/anchor";
import Copyright from "../components/copyright";

const Footer: NextPage = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-gray-100 dark:bg-gray-900">
        <div className="relative mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <Copyright></Copyright>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
