import { useEffect, useState } from "react";
import "../styles/header.css";
import checkStorage, { checkLocale } from "../utils/storage";
function Header() {
  let theme = localStorage.theme === "dark" ? false : true;
  const [darkMode, setDarkMode] = useState(theme);
  useEffect(() => {
    checkStorage();
    checkLocale();
  }, [darkMode]);
  return (
    <>
      <header
        className="pt-4 flex
      flex-col"
      >
        <label className="relative inline-flex items-center cursor-pointer ">
          <input
            id="mode"
            type="checkbox"
            checked={darkMode}
            onChange={() => {
              setDarkMode(!darkMode);
              if (darkMode === true) {
                localStorage.setItem("theme", "dark");
              } else {
                localStorage.setItem("theme", "light");
              }
            }}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </label>
        <select
          className="text-center text-xl overflow-auto drop-shadow mt-8 rounded bg-secondary p-2 text-accent"
          name="lang"
          id="lang"
          size={3}
          onChange={(e) => {
            localStorage.setItem("locale", e.target.value);
            window.location.reload();
          }}
        >
          <option value="eng">🇺🇸</option>
          <option value="est">🇪🇪</option>
          <option value="rus">🇷🇺</option>
        </select>
      </header>
    </>
  );
}

export default Header;
