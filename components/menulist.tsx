import { NextPage } from "next";
import { useState, useEffect } from "react";

const MenuList: NextPage = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    localStorage.setItem("theme", "dark");
  }

  function useDarkMode() {
    const [theme, setTheme] = useState(
      typeof window !== "undefined" ? localStorage.theme : "dark"
    );
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
      const root = window.document.documentElement;

      root.classList.remove(colorTheme);
      root.classList.add(theme);

      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
      }
    }, [theme]);

    return [colorTheme, setTheme] as const;
  }

  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-0 items-center mt-4 border border-gray-100 bg-transparent rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="https://github.com/paanjoe/ustazgpt/issues"
              target={"_blank"}
              className="block py-2 pl-4 pr-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:delay-100  text-gray-900 dark:text-white"
            >
              Report a Bug
            </a>
          </li>
          <li>
            <a
              href="https://github.com/paanjoe/ustazgpt"
              target={"_blank"}
              className="block py-2 pl-3 pr-4  rounded bg-transparent  hover:bg-gray-200  dark:hover:bg-gray-700 transition-all hover:delay-100 text-gray-900 dark:text-white"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.buymeacoffee.com/paanjoe"
              target={"_blank"}
              className="block py-2 pl-3 pr-4 rounded bg-transparent  hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:delay-100  text-gray-900 dark:text-white"
            >
              Sponsor
            </a>
          </li>
          <li>
            <a
              href="https://github.com/paanjoe/ustazgpt/blob/main/LICENSE"
              target={"_blank"}
              className="block py-2 pl-3 pr-4 rounded bg-transparent  hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:delay-100  text-gray-900 dark:text-white"
            >
              License
            </a>
          </li>
          <li>
            {colorTheme === "light" ? (
              <div className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:delay-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                <svg
                  onClick={() => setTheme("light")}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            ) : (
              <div className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                <svg
                  onClick={() => setTheme("dark")}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuList;
