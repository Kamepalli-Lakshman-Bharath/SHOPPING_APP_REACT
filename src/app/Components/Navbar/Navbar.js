"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
export default function Navbar() {
  const productCount = useSelector((state) => state.productsCount); //accepts call back
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <a href="/">
          <div className={styles.logo}>
            <span className={styles.logo_1}>SHOP</span>LANE
          </div>
        </a>
        <div className={styles.content}>
          <Link href="/#clothing">CLOTHING</Link>
          <Link href="/#accessories">ACCESSORIES</Link>
        </div>
      </div>
      <div  className={styles.cart}>
        <Link href={'/Cart'}>
          <img src="/cart.svg" alt="cart" />
        </Link>
        {productCount > 0 && <p className={styles.cartCount}>{productCount}</p>}
      </div>
    </nav>
  );
}
