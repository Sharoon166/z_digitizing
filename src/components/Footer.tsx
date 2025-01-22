import { socialLinks } from "@/constants";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font mt-14 border-t-2 dark:border-gray-300">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-primary">
          <img
            src="/logo.png"
            alt="z_digitizing brand logo"
            className="size-12"
          />
          <span className="ml-3 text-xl">Z-Digitizing</span>
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-50 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
          {socialLinks.map(({ name, className, href, icon }) => (
            <a
                  key={href}
                  href="href"
                  target="_blank"
                  className={cn("text-gray-500 dark:text-gray-50 transition-colors duration-300 cursor-pointer", className)}
            >
              {icon} <span className="sr-only">{name}</span>
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
