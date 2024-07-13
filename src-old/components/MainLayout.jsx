import React, { Component, useEffect, useState } from "react";
import Header from "./header/Header.jsx";
import Cards from "./Cards.jsx";
import Cart from "./Cart.jsx";
import axios from "axios";
import {httpRequest} from '../services/httpRequests.js'

import Routers from "../Routers/Routers.jsx";
import { Outlet } from "react-router-dom";

// HOC ==> Higher Order Componets
const MainLayout = () => {
  let [products, setProducts] = useState([
    { id: 1, title: "P1", price: 1000, qty: 1 },
    { id: 2, title: "P2", price: 2000, qty: 1 },
    { id: 3, title: "P3", price: 3000, qty: 1 },
  ]);

  const getData = async () => {
    // axios(end point , {})
    // let data = await httpInterceptorReq("/users", {
    //   method: "GET",
    // });
    // console.log(data.data);
  };

  const postSignupData = async() => {
    let usr =  {
      fName :  "Amir" ,
      lName :  "salahdost" ,
      email :  "salahdost@gmail.com" ,
      mobile :  "09125346931" ,
      title :  "Back developer" ,
      password :  "aaaaaa" ,
      skills :  "php-nodejs" ,
      image :  "/"
  }

    let data = await httpRequest("/signup", {
      method: "POST",
      data:usr
    });
    localStorage.setItem('tkn_ACCESSUSER' , data.data.token)
  }
  const postUserData = async() => {
    let usr =  {
      fName :  "Amir" ,
      lName :  "Kamizi" ,
      email :  "kamizi@gmail.com" ,
      mobile :  "09335641234" ,
      title :  "Frontend developer" ,
      role :  "admin" ,
      skills :  "react" ,
      image :  "/"
  }

    let data = await httpRequest("/users", {
      method: "POST",
      data:usr
    });
  }

  // const deleteData = async() => {
  //   let data = await axios("/users/userId", {
  //     method: "DELETE",
  //     baseURL: "https://jsonplaceholder.typicode.com",
  //   });
  //   console.log(data.data);
  // }

  useEffect(() => {
    getData()
  }, []);

  let [cartList, setCartList] = useState([]);

  let [showCart, setShowCart] = useState(false);

  let [fullname, setFullname] = useState("");

  const addToCart = (product) => {
    let arrCart = [...cartList];
    let findedProduct = arrCart.filter((item) => item.id === product.id);

    if (findedProduct.length > 0) {
      alert("این محصول در سبد خرید شما موجود است.");
    } else {
      arrCart.push(product);
      setCartList(arrCart);
    }
  };

  const changeQty = (item, counter) => {
    let cartListArr = [...cartList];
    let productFiltered = cartListArr.filter((pr) => pr !== item);
    item.qty += counter;
    productFiltered.push(item);
    setCartList([...cartList], productFiltered);
  };

  const deletePrCart = (id) => {
    let cartListArr = [...cartList];
    let filteredArr = cartListArr.filter((item) => item.id !== id);
    setCartList(filteredArr);
  };

  return (
    <div className="d-flex flex-col px-3">
      <Header fname={fullname} setShowCart={setShowCart} cartList={cartList} />
      <Routers/>
    </div>
  );
};

export default MainLayout;
