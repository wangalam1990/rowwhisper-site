import { useState } from "react";
import { Menu, X, MessageSquare, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  const legalLinks = [
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/terms", label: "Terms of Service" },
    { path: "/refund", label: "Refund & Cancellation" },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <MessageSquare className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold">RowWhisper</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  location.pathname === link.path ? "text-emerald-400" : "text-slate-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setIsLegalOpen(!isLegalOpen)}
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
              >
                Legal
                <ChevronDown className={`w-4 h-4 transition-transform ${isLegalOpen ? "rotate-180" : ""}`} />
              </button>
              {isLegalOpen && (
                <div className="absolute top-full left-0 mt-1 bg-slate-800 rounded-lg shadow-lg py-2 min-w-[200px] z-50">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block px-4 py-2 text-sm ${
                        location.pathname === link.path ? "text-emerald-400 bg-slate-700/50" : "text-slate-300 hover:text-emerald-400 hover:bg-slate-700/50"
                      }`}
                      onClick={() => setIsLegalOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.path ? "text-emerald-400" : "text-slate-300 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-700">
              <p className="text-sm font-medium text-slate-300 mb-2">Legal</p>
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-2 text-sm ${
                    location.pathname === link.path ? "text-emerald-400" : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-700 space-y-2">
              <Link
                to="/login"
                className="block py-2 text-sm font-medium text-slate-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}