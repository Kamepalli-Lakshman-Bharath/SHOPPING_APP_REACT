"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./product.module.css";
import NavBar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { useDispatch } from "react-redux";

export default function Product(props) {
  const { id } = props.params;
  const [product, setProduct] = useState([]);
  const [preview, setPreview] = useState([]);
  const [btnBlink, setBtnBlink] = useState(false);
  const [prodCnt, setProdCnt] = useState(1);

  useEffect(() => {
    axios
      .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setPreview(res.data.preview);
      })
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();
  const productsCount = {
    type: "PRODUCTS_COUNT",
  };
  const productDetails = {
    type: "PRODUCT_DETAILS",
    product: {
      image: product.preview,
      name: product.name,
      price: product.price,
      count: prodCnt,
    },
    id: id,
  };

  const handleBtn = () => {
    setBtnBlink(true);
    setTimeout(() => {
      setBtnBlink(false);
    }, 500);
    dispatch(productsCount); //products count
    setProdCnt(prodCnt + 1); // product by id count
    dispatch(productDetails);
  };
  const handlePreview = (image) => {
    setPreview(image);
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={preview} alt={product.name} />
        </div>
        <div className={styles.right}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.brand}>{product.brand}</p>
          <p className={styles.sideHead}>
            Price: Rs
            <span style={{ color: "#009688", fontWeight: "500" }}>
              {" " + product.price}
            </span>
          </p>
          <p className={styles.sideHead}>Description</p>
          <p className={styles.description}> {product.description}</p>
          <p className={styles.sideHead}>Product Preview</p>
          <div className={styles.previews}>
            {product.photos &&
              product.photos.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    onClick={() => handlePreview(item)}
                    className={styles.card}
                    style={
                      preview === item
                        ? { border: "2px solid #009688", borderRadius: "5px" }
                        : {}
                    }
                  >
                    <img src={item} alt={"image " + idx} />
                  </div>
                );
              })}
          </div>
          <button
            className={
              btnBlink ? ` ${styles.btn} ${styles.btnBlink}` : styles.btn
            }
            onClick={handleBtn}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
