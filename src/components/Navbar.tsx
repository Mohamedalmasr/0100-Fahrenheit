import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, Menu, X, LogOut, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/lib/user-context";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/solutions", label: "Solutions" },
  { path: "/platform", label: "Platform" },
  { path: "/pricing", label: "Pricing" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const UserNav = () => {
  const { user, logout } = useUser();
  if (!user) return null;

  const initials =
    user.name?.trim().charAt(0).toUpperCase() ||
    user.email.trim().charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-2 py-1.5 text-sm font-medium text-slate-800 shadow-sm hover:border-emerald-300 hover:text-emerald-700">
          <Avatar className="h-8 w-8 border border-emerald-100">
            <AvatarImage alt={user.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block text-xs text-slate-500">Signed in</span>
            <span className="block text-sm font-semibold text-slate-900">
              {user.name}
            </span>
          </span>
          <ChevronDown className="h-4 w-4 text-slate-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              {user.name}
            </span>
            <span className="text-xs text-slate-500">{user.email}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="flex items-center gap-2 text-sm text-slate-800"
          onSelect={(event) => {
            event.preventDefault();
            logout();
          }}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar: React.FC = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
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

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <UserNav />
              <Button asChild className="text-xs sm:text-sm">
                <Link to="/contact">Book a Discovery Call</Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 hover:text-emerald-700"
              >
                <Link to="/login">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-emerald-200 text-xs sm:text-sm text-emerald-700 hover:bg-emerald-50"
              >
                <Link to="/signup">
                  <UserPlus className="h-4 w-4" />
                  <span>Sign up</span>
                </Link>
              </Button>

              <Button asChild className="text-xs sm:text-sm">
                <Link to="/contact">Book a Discovery Call</Link>
              </Button>
            </>
          )}
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white p-2 text-slate-700 shadow-sm hover:border-emerald-400 hover:text-emerald-600 md:hidden"
          aria-label="Toggle navigation"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <div
        className={`md:hidden border-t border-slate-200 bg-white/95 backdrop-blur transition-all ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 text-sm text-slate-700">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                [
                  "block rounded-md px-2 py-1 transition",
                  isActive
                    ? "bg-emerald-50 text-emerald-700 font-semibold"
                    : "hover:bg-slate-100",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="mt-2 flex flex-wrap gap-2">
            {user ? (
              <div className="w-full">
                <UserNav />
                <Button
                  asChild
                  size="sm"
                  className="mt-2 w-full justify-center gap-2 text-xs text-slate-700 hover:text-emerald-700"
                >
                  <Link to="/contact" onClick={closeMenu}>
                    Book a Discovery Call
                  </Link>
                </Button>
              </div>
            ) : (
              <>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="flex-1 justify-center gap-2 text-xs text-slate-700 hover:text-emerald-700"
                >
                  <Link to="/login" onClick={closeMenu}>
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex-1 justify-center gap-2 border-emerald-200 text-xs text-emerald-700 hover:bg-emerald-50"
                >
                  <Link to="/signup" onClick={closeMenu}>
                    <UserPlus className="h-4 w-4" />
                    <span>Sign up</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  className="mt-1 w-full justify-center text-xs"
                >
                  <Link to="/contact" onClick={closeMenu}>
                    Book a Discovery Call
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
