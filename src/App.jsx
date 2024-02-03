import React, { useState } from "react";
import { Header } from "./components/Header.jsx";
import { Search } from "./components/Search.jsx";
import { CartButton } from "./components/CartButton.jsx";
import { Footer } from "./components/Footer.jsx";
import { ProductList } from "./components/ProductList.jsx";

import iphoneBlue from "./images/iphone_blue.avif";
import iphoneGreen from "./images/iphone_green.avif";
import iphonePink from "./images/iphone_pink.avif";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "iPhone 15 128GB Blue",
    price: 799,
    imageSrc: iphoneBlue,
  },
  {
    id: 2,
    name: "iPhone 15 128GB Green",
    price: 799,
    imageSrc: iphoneGreen,
  },
  {
    id: 3,
    name: "iPhone 15 128GB Pink",
    price: 799,
    imageSrc: iphonePink,
  },
];

export function App() {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function handleSearch(searchTerm) {
    const results = MOCK_PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setProducts(results);
  }

  return (
    <>
      <Header>
        <h1>eStore</h1>
        <Search onSearch={handleSearch} />
        <CartButton numOfItems={cartItems.length} />
      </Header>
      <main className="container">
        <ProductList products={products} onAddToCartClick={handleAddToCart} />
      </main>
      <Footer>&copy; {new Date().getFullYear()}</Footer>
    </>
  );
}
