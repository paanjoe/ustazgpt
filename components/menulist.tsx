import { NextPage } from "next";
import RightMenu from "./rightmenu";

const MenuList: NextPage = () => {
  return (
    <div>
      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Site Nav" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Settings
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Report a Bug
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                Get Help
              </a>
            </li>

            <li>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href="/"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      <RightMenu></RightMenu>
      </div>
    </div>
  );
};

export default MenuList;
