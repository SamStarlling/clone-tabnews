import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch (e) {
      // ignore (SSR)
    }
  }, []);

  useEffect(() => {
    // apply theme class to documentElement
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("light-theme", "dark-theme");
      document.documentElement.classList.add(`${theme}-theme`);
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />;
}

export default MyApp;
