import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          &copy; <span>{year}</span> 049NorthRealEstate. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/solutions" className="transition hover:text-emerald-600">
            Solutions
          </Link>
          <Link to="/pricing" className="transition hover:text-emerald-600">
            Pricing
          </Link>
          <Link to="/contact" className="transition hover:text-emerald-600">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  