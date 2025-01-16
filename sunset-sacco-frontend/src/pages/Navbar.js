import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";  // Import the dropdown icon

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="flex border-b border-1 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="w-full flex flex-wrap items-center justify-between gap-6 sm:px-10 px-6 py-3 relative">
        {/* Logo */}
        <a href="/" className="font-semibold text-xl text-[#FF5733]">
          Sunset SACCO
        </a>

        {/* Navbar Links */}
        <div className="flex items-center gap-6">
          <ul className="lg:flex lg:gap-x-10 space-y-3 lg:space-y-0">
            {/* Home */}
            <li>
              <a href="/" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Home
              </a>
            </li>

            {/* About Us */}
            <li>
              <a href="/about" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                About Us
              </a>
            </li>

            {/* Join Us Dropdown */}
            <li className="relative">
              <button
                className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px] flex items-center"
                onClick={() => handleDropdownToggle("joinUs")}
              >
                Join Us <FaCaretDown className="ml-2" />
              </button>
              {activeDropdown === "joinUs" && (
                <div className="absolute bg-white shadow-lg p-4 z-50 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <a href="/membership" className="text-[#FF5733] font-semibold text-[15px]">
                        Membership
                      </a>
                    </li>
                    <li>
                      <a href="/benefits" className="text-[#FF5733] font-semibold text-[15px]">
                        Benefits
                      </a>
                    </li>
                    <li>
                      <a href="/eligibility" className="text-[#FF5733] font-semibold text-[15px]">
                        Membership Eligibility
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Get A Loan Now Dropdown */}
            <li className="relative">
              <button
                className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px] flex items-center"
                onClick={() => handleDropdownToggle("loan")}
              >
                Get A Loan Now <FaCaretDown className="ml-2" />
              </button>
              {activeDropdown === "loan" && (
                <div className="absolute bg-white shadow-lg p-4 z-50 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <a href="/loan-requirements" className="text-[#FF5733] font-semibold text-[15px]">
                        General Loan Requirements
                      </a>
                    </li>
                    <li>
                      <a href="/bosa-loan" className="text-[#FF5733] font-semibold text-[15px]">
                        Back Office Saving Loan Activity (BOSA)
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px] flex items-center"
                onClick={() => handleDropdownToggle("service")}
              >
                Services <FaCaretDown className="ml-2" />
              </button>
              {activeDropdown === "service" && (
                <div className="absolute bg-white shadow-lg p-4 z-50 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <a href="/mobile-banking" className="text-[#FF5733] font-semibold text-[15px]">
                        Mobile Banking
                      </a>
                    </li>
                    <li>
                      <a href="/internet-banking" className="text-[#FF5733] font-semibold text-[15px]">
                        Internet Banking
                      </a>
                    </li>
                    <li>
                      <a href="/contribution" className="text-[#FF5733] font-semibold text-[15px]">
                        Contribution
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Feedback */}
            <li>
              <a href="/feedback" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Feedback
              </a>
            </li>

            {/* News & Events */}
            <li>
              <a href="/news-events" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                News & Events
              </a>
            </li>

            {/* Gallery */}
            <li>
              <a href="/gallery" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Gallery
              </a>
            </li>

            {/* Sign In / Register */}
            <li className="flex gap-4">
              <a href="/signin" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Sign In
              </a>
              <a href="/register" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
