import React from "react";

import styles from "./ProductList.module.css";

export function ProductList({ products, onAddToCartClick }) {
  return (
    <section className={styles.wrapper}>
      {products.map((product) => (
        <article key={product.id}>
          <figure>
            <img alt={product.name} src={product.imageSrc} />
            <figcaption>
              <span className="product-name">{product.name}</span>
            </figcaption>
            <button onClick={() => onAddToCartClick(product)}>
              Add to cart (${product.price})
            </button>
          </figure>
        </article>
      ))}
    </section>
  );
}
