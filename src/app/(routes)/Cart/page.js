"use client";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";

export default function Cart() {
 const productsDetials = useSelector((state) => state.productsDetails);
  return (
    <>
      <div className={styles.body}>
        <Navbar />
        <p className={styles.heading}>Checkout</p>
        <p className={styles.sideHeading}>
          Total Items:{" " + Object.values(productsDetials).length}
        </p>
        <div className={styles.wrapper}>
          <div className={styles.items}>
            {Object.values(productsDetials).map((product, idx) => (
              <div key={idx} className={styles.cartItemWrap}>
                <div className={styles.image}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div>
                  <h4 className={styles.prodName}>{product.name}</h4>
                  <p className={styles.prodCount}>x{product.count}</p>
                  <p className={styles.prodPrice}>
                    Amount: Rs{" " + product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.totalProducts}>
            <p className={styles.sideHeading}>Total Amount</p>
            <p>
              Amount: Rs{" "}
              <span className={styles.totalprice}>
                {Object.values(productsDetials).reduce((acc, product) => {
                  return acc + product.price * product.count;
                }, 0)}
              </span>
            </p>
            {Object.keys(productsDetials).length > 0 && (
              <button className={styles.btn}> Add to Cart</button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
