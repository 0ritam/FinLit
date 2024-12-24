import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Define the navigation links, adding Fraud Prevention before Dashboard
  const navLinks = [
    { path: "/budgeting", label: "Budgeting" },
    { path: "/investing", label: "Investing" },
    { path: "/saving", label: "Saving" },
    { path: "/fraud-prevention", label: "Fraud Prevention" }, // New link
  ];

  const isDashboard = location.pathname === "/dashboard";

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
          <span className="text-xl font-semibold">Lovely</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`text-neutral-600 hover:text-primary transition-colors font-medium ${
                location.pathname === path ? "border-b-4 border-green-500 text-primary" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
        <Link to="/dashboard" className={`${isDashboard ?"border-b-4 border-green-500 text-primary" : "" } text-neutral-600 hover:text-primary transition-colors font-medium`}>
              Dashboard
            </Link>
          <Link to="/signup" className="button-secondary">
            Profile
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-neutral-200/50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-panel mt-2 rounded-xl p-4 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-neutral-600 hover:text-primary transition-colors font-medium px-4 py-2 hover:bg-neutral-200/50 rounded-lg ${
                  location.pathname === path ? "border-b-4 border-green-500" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <hr className="border-neutral-200" />
            <Link to="/signup" className="button-secondary w-full text-center">
              Profile
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
