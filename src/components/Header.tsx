import { ThemeSwitcher } from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="py-3 flex items-center justify-between border-b border-gray-300 dark:border-transparent">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="zee-digitizing brand logo"
          className="size-16 object-contain"
        />
        <div>
          <div className="font-bold max-sm:text-lg text-xl text-gray-800 dark:text-mustard">
            Z-Digitizing
          </div>
          <p className="text-xs max-sm:text-[0.7em] text-gray-600 dark:text-gray-50">
            Professional Embroidery Solutions
          </p>
        </div>
      </div>
      <nav className="flex items-center gap-1">
        <ul className="max-sm:hidden flex items-center gap-6 text-gray-700 dark:text-gray-50">
          <li>
            <a href="#showcase" className="hover:text-green-800">
              Showcase
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-800">
              Contact us
            </a>
          </li>
          <li></li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
