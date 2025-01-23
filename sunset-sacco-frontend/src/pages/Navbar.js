import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Dropdown = ({ label, items, activeDropdown, toggleDropdown }) => (
  <li className="relative">
    <button
      className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px] flex items-center"
      onClick={toggleDropdown}
      aria-expanded={activeDropdown ? "true" : "false"}
      aria-controls={label}
    >
      {label} <FaCaretDown className="ml-2" />
    </button>
    {activeDropdown && (
      <div
        id={label}
        className="absolute bg-white shadow-lg p-4 z-50 mt-2"
      >
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-[#FF5733] font-semibold text-[15px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </li>
);

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="flex border-b border-1 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="w-full flex flex-wrap items-center justify-between gap-6 sm:px-10 px-6 py-3 relative">
        {/* Logo */}
        <Link to="/" className="font-semibold text-xl text-[#FF5733]">
          Sunset SACCO
        </Link>

        {/* Navbar Links */}
        <div className="flex items-center gap-6">
          <ul className="lg:flex lg:gap-x-10 space-y-3 lg:space-y-0">
            {/* Home */}
            <li>
              <Link to="/" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Home
              </Link>
            </li>

            {/* About Us */}
            <li>
              <Link to="/about" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                About Us
              </Link>
            </li>

            {/* Join Us Dropdown */}
            <Dropdown
              label="Join Us"
              items={[
                { label: "Membership", path: "/membership" },
                { label: "Benefits", path: "/benefits" },
                { label: "Membership Eligibility", path: "/eligibility" },
              ]}
              activeDropdown={activeDropdown === "joinUs"}
              toggleDropdown={() => handleDropdownToggle("joinUs")}
            />

            {/* Get A Loan Now Dropdown */}
            <Dropdown
              label="Get A Loan Now"
              items={[
                { label: "General Loan Requirements", path: "/requestLoan" },
                { label: "Back Office Saving Loan Activity (BOSA)", path: "/bosa" },
              ]}
              activeDropdown={activeDropdown === "loan"}
              toggleDropdown={() => handleDropdownToggle("loan")}
            />

            {/* Services Dropdown */}
            <Dropdown
              label="Services"
              items={[
                { label: "Mobile Banking", path: "/mobileBanking" },
                { label: "Internet Banking", path: "/interneBanking" },
                { label: "Contribution", path: "/contributions" },
                { label: "Welfare Fund", path: "/welfare" },
              ]}
              activeDropdown={activeDropdown === "service"}
              toggleDropdown={() => handleDropdownToggle("service")}
            />
            {/* Sign In / Register */}
            <li className="flex gap-4">
              <Link to="/signin" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Sign In
              </Link>
              <Link to="/register" className="hover:text-[#FF5733] text-gray-500 font-semibold text-[15px]">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
