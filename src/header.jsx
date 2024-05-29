import React from "react";
import { useTheme } from "./theme";

function Header() {
  const { theme } = useTheme();

  return (
    <div className={`container-fluid p-5 ${theme === "light" ? "bg-success text-white" : "bg-warning text-dark"}`}>
      <h1>Dramatically Exchange</h1>
      <p>Objectively innovate empowered manufactured products whereas parallel platforms</p>
      <button>Engage Now</button>
    </div>
  );
}

export default Header;