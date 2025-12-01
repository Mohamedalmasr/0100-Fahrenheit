import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Platform from "./pages/Platform";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";    
import Signup from "./pages/Signup"; 
import { Button } from "@/components/ui/button";

const AuthPromptBar = () => {
  const [isAuthed, setIsAuthed] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("hasLoggedIn") === "true";
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const syncAuth = () => {
      setIsAuthed(localStorage.getItem("hasLoggedIn") === "true");
    };

    window.addEventListener("storage", syncAuth);
    window.addEventListener("auth-state-change", syncAuth);
    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("auth-state-change", syncAuth);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 120);
    return () => clearTimeout(timer);
  }, []);

  if (isAuthed) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-80 flex justify-center px-4 pb-4 sm:pb-6">
      <div
        className={`pointer-events-auto w-full max-w-3xl translate-y-4 rounded-2xl border border-emerald-200 bg-white/95 p-4 shadow-2xl ring-1 ring-emerald-100 backdrop-blur transition duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
              Access to account
            </p>
            <h2 className="text-lg font-bold text-slate-900">
              Log in or create an account to enjoy all the benefits
            </h2>
            <p className="text-sm text-slate-600">
              You can browse the site freely, but you must log in to continue without this alert.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:w-[260px] sm:flex-row">
            <Button
              asChild
              className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Link to="/login">Log In</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50"
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthPromptBar />
      <div className="flex min-h-screen flex-col bg-linear-to-b from-slate-50 via-white to-emerald-50/40 text-slate-900">
        <Navbar />

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
