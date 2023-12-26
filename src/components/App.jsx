import React from "react";
import { Header } from "./Header/Header.jsx";
import { Logo } from "./Logo/Logo.jsx";
import { Search } from "./Search/Search.jsx";
import { Cart } from "./Cart/Cart.jsx";

export function App() {
  return (
    <>
      <Header>
        <Logo />
        <Search />
        <Cart />
      </Header>
    </>
  );
}
