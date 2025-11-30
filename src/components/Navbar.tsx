import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/solutions", label: "Solutions" },
  { path: "/platform", label: "Platform" },
  { path: "/pricing", label: "Pricing" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-200 bg-linear-to-br from-emerald-50 to-white text-sm font-bold text-emerald-700 shadow-sm">
            49
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">
              049NorthRealEstate
            </div>
            <div className="text-[11px] text-slate-600">
              IT, Hosting &amp; Web for Real Estate
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                [
                  "transition",
                  isActive
                    ? "text-emerald-700 font-semibold"
                    : "hover:text-emerald-600",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button asChild className="text-xs sm:text-sm">
            <Link to="/contact">Book a Discovery Call</Link>
          </Button>
        </div>

        {/* Mobile icon */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-700 shadow-sm hover:border-emerald-400 hover:text-emerald-600 md:hidden"
          aria-label="Open navigation"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
