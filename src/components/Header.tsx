const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="zee-digitizing brand logo"
          className="size-16 object-contain"
        />
        <div>
          <div className="font-bold text-xl text-gray-800">Z-Digitizing</div>
          <p className="text-xs text-gray-600">
            Professional Embroidery Solutions
          </p>
        </div>
      </div>
      <nav>
        <ul className="flex items-center gap-6 text-gray-700">
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
