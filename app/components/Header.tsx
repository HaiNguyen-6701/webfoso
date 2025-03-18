"use client";

import Image from "next/image";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

type HeaderProps = {
  logoSrc: string;
  logoAlt: string;
  menuItems: { label: string; showArrow: boolean }[]; // Modify menuItems type
};

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt, menuItems }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("vi");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    console.log(`Language changed to ${lang}`);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const getFlagImage = (lang: string) => {
    switch (lang) {
      case "vi":
        return "/images/flagvietnam.png";
      case "en":
        return "/images/flagenglish.png";
      default:
        return "/images/flagvietnam.png";
    }
  };

  return (
    <header className="">
      <div className="max-w-7xl mx-auto px-[68px]">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" aria-label="Logo Link">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={134}
                height={55}
                className="object-contain"
              />
            </a>

            {/* Navigation Bar */}
            <div className="hidden md:flex space-x-8 mt-3">
              {menuItems.map((item) => (
                <div key={item.label} className="relative flex flex-col items-center">
                  <a
                    href="/detailpost"
                    className="font-medium flex items-center space-x-2"
                  >
                    {item.label}
                    {item.showArrow && (
                      <Image
                        src="/images/down-arrow.png"
                        alt="down-arrow"
                        width={16}
                        height={16}
                        className="object-contain ml-2"
                      />
                    )}
                  </a>
                  {item.label === "Tài nguyên" && (
                    <div className="w-[6px] h-[6px] bg-[#1AD598] rounded-full mt-1 mr-4"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center space-x-4 relative border border-gray-200 bg-gray-100 rounded-[40px] px-3 py-2 w-[94px]">
              <button
                type="button"
                className="flex items-center cursor-pointer space-x-2 w-full justify-between"
                onClick={toggleDropdown}
                aria-haspopup="true"
              >
                <Image
                  src={getFlagImage(selectedLanguage)}
                  alt={selectedLanguage}
                  width={20}
                  height={14}
                  className="object-contain"
                />
                <span className="text-base font-medium">{selectedLanguage.toUpperCase()}</span>
                <Image
                  src="/images/down-arrow.png"
                  alt="down-arrow"
                  width={16}
                  height={16}
                  className={`object-contain ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Language Dropdown */}
              <div
                className={`absolute top-10 right-0 mt-2 w-[94px] bg-gray-100 text-black rounded-md shadow-lg transition-all duration-300 ease-in-out transform ${isDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ display: isDropdownOpen ? "block" : "none" }}
              >
                <ul>
                  {["vi", "en"].filter((lang) => lang !== selectedLanguage).map((lang) => (
                    <li
                      key={lang}
                      onClick={() => handleLanguageChange(lang)} // Handle language change
                      className="px-4 py-2 text-base cursor-pointer hover:bg-gray-200 transition duration-200 rounded-md flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2"> {/* Reduced space between flag and text */}
                        <Image
                          src={getFlagImage(lang)}
                          alt={lang}
                          width={18}
                          height={12}
                          className="object-contain"
                        />
                        <span className="text-base font-medium">{lang.toUpperCase()}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>


            {/* Box with "Trở thành khách hàng" */}
            <a href="/detailpost" className="flex items-center bg-[#1AD598] h-auto rounded-[40px] gap-2 px-4 py-2 justify-between">
              <span className=" font-semibold text-base">Trở thành khách hàng</span>
              <div className="flex items-center justify-center w-[32px] h-[32px] bg-black rounded-full">
                <Image
                  src="/images/up-right-arrow.png"
                  alt="up-right-arrow"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header >
  );
};

export default Header;
