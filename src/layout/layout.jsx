import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { StiledNavLink } from "./styled";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <StiledNavLink to="/">Каталог</StiledNavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
