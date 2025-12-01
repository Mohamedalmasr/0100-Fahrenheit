import { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = {
  name: string;
  email: string;
};

type UserContextValue = {
  user: User | null;
  login: (payload: User) => void;
  logout: () => void;
};

const STORAGE_KEY = "app.user";

const getStoredUser = () => {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as User;
    if (parsed?.email && parsed?.name) return parsed;
    return null;
  } catch {
    return null;
  }
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => getStoredUser());

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      localStorage.setItem("hasLoggedIn", "true");
    } else {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem("hasLoggedIn");
    }
  }, [user]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        setUser(event.newValue ? getStoredUser() : null);
      }
      if (event.key === "hasLoggedIn" && event.newValue === null) {
        setUser(null);
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const login = (payload: User) => {
    setUser(payload);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    localStorage.setItem("hasLoggedIn", "true");
    window.dispatchEvent(new Event("auth-state-change"));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("hasLoggedIn");
    window.dispatchEvent(new Event("auth-state-change"));
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return ctx;
};
