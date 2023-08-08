"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import MyCarousel from "./Components/carousal/carousal";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Card/Card";
import Head from "next/head";

export default function Home() {
  const [accessories, setAccessories] = useState([]);
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        const data = res.data;
        const acce = data.filter((item) => {
          return item.isAccessory;
        });
        const cloth = data.filter((item) => {
          return !item.isAccessory;
        });

        setAccessories(acce);
        setClothing(cloth);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <Head>
        <title>ShoppingAppReact</title>
      </Head>
      <NavBar />
      <MyCarousel />
      <p className="name" id="clothing">
        Clothing for Men And Women
      </p>
      <div className="container">
        {clothing &&
          clothing.map((item) => (
            <Card
              key={item.id}
              preview={item.preview}
              name={item.name}
              brand={item.brand}
              price={item.price}
              id={item.id}
            />
          ))}
      </div>
      <p className="name" id="accessories">
        Accessories for Men and Women
      </p>
      <div className="container">
        {accessories &&
          accessories.map((item) => (
            <Card
              key={item.id}
              preview={item.preview}
              name={item.name}
              brand={item.brand}
              price={item.price}
              id={item.id}
            />
          ))}
      </div>
      <Footer></Footer>
    </main>
  );
}
