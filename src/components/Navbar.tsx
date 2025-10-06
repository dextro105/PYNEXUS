import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Services", path: "/services" },
    { title: "Roadmap", path: "/roadmap" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <Code2 className="text-indigo-600 w-8 h-8" />
          <span className="text-2xl font-extrabold text-indigo-700 select-none">
            Python Nexus
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold text-gray-700">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 py-1 transition-colors duration-300 ${
                  isActive
                    ? "text-indigo-600"
                    : "hover:text-indigo-500 focus:text-indigo-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.title}
                  {/* Underline animation */}
                  <motion.span
                    layoutId="underline"
                    className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-600 rounded-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    initial={false}
                    animate={{ width: isActive ? "100%" : "0%" }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-inner"
          >
            <div className="flex flex-col space-y-2 px-6 py-4 text-gray-700 font-semibold">
              {menuItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded hover:bg-indigo-50 focus:bg-indigo-50 transition-colors ${
                      isActive ? "text-indigo-600" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
