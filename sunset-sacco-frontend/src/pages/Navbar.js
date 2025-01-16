import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [joinUsOpen, setJoinUsOpen] = useState(false);
  const [loanOpen, setLoanOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="flex border-b border-1 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="w-full flex flex-wrap items-center justify-between gap-6 sm:px-10 px-6 py-3 relative">
        {/* Logo */}
        <a href="#" className="font-semibold text-xl text-[#FF5733]">
          Sunset SACCO
        </a>

        {/* Navbar Links */}
        <div className="flex items-center gap-6">
          <ul className="lg:flex lg:gap-x-10 space-y-3 lg:space-y-0">
            {/* Home */}
            <li>
              <a href="#" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Home
              </a>
            </li>

            {/* About Us */}
            <li>
              <a href="#" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                About Us
              </a>
            </li>

            {/* Join Us Dropdown */}
            <li className="relative">
              <button
                className="flex items-center gap-1 hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]"
                onClick={() => setJoinUsOpen(!joinUsOpen)}
              >
                Join Us
                <span>{joinUsOpen ? "▲" : "▼"}</span> {/* Add dropdown icon */}
              </button>
              {joinUsOpen && (
                <div className="absolute bg-white shadow-lg p-4 z-50 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-[#FF5733] font-semibold text-[15px]">
                        Membership
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#FF5733] font-semibold text-[15px]">
                        Benefits
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#FF5733] font-semibold text-[15px]">
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
                className="flex items-center gap-1 hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]"
                onClick={() => setLoanOpen(!loanOpen)}
              >
                Get A Loan Now
                <span>{loanOpen ? "▲" : "▼"}</span> {/* Add dropdown icon */}
              </button>
              {loanOpen && (
                <div className="absolute bg-white shadow-lg p-4 z-50 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-[#FF5733] font-semibold text-[15px]">
                        General Loan Requirements
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#FF5733] font-semibold text-[15px]">
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
                className="flex items-center gap-1 hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]"
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                Services
                <span>{serviceOpen ? "▲" : "▼"}</span> {/* Add dropdown icon */}
              </button>
              {serviceOpen && (
                <div className="absolute bg-white shadow-lg p-4 z-50 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-[#FF5733] font-semibold text-[15px]">
                        Mobile Banking
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#FF5733] font-semibold text-[15px]">
                        Internet Banking
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#FF5733] font-semibold text-[15px]">
                        Contribution
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Feedback */}
            <li>
              <a href="#" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Feedback
              </a>
            </li>

            {/* News & Events */}
            <li>
              <a href="#" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                News & Events
              </a>
            </li>

            {/* Gallery */}
            <li>
              <a href="#" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Gallery
              </a>
            </li>

            {/* Sign In / Register */}
            <li className="flex gap-4">
              <a href="#" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Sign In
              </a>
              <a href="#" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
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
