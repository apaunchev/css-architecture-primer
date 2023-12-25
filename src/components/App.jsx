import React from "react";
import { Header } from "./Header/Header.jsx";

function Logo() {
  return <h1>Logo</h1>;
}

function Search() {
  return <input type="text" placeholder="Search" />;
}

function Cart() {
  return <div>Cart</div>;
}

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
