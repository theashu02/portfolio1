import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white px-24 py-4 font-poppins shadow-lg">
      <div className="container flex justify-between items-center">
        
        
        <div className="font-semibold text-2xl leading-9">
          <span className="text-[#469DB1]">Turbo</span> Treats
          <p className="text-xs font-medium leading-4">Manage better, Serve better</p>
        </div>

        
        <ul className="flex space-x-8 font-semibold text-base leading-6">
          {[
            { to: "/", label: "Home" },
            { to: "/platform", label: "Platform" },
            { to: "/services", label: "Services" },
            { to: "/partners", label: "Partners" },
            { to: "/about", label: "About Us" },
            { to: "/products", label: "Products" }
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "text-black underline decoration-[#469DB1] underline-offset-4"
                    : "text-black hover:text-[#469DB1]"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        
        <NavLink
          to="/trial"
          className="bg-[#469DB1] font-semibold text-base leading-6 text-white px-20 py-2 rounded-xl hover:bg-[#60d1eb]"
        >
          Get Free Trial
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
