import React from "react";
import { useEffect } from "react";
import axios from "axios";
const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalDefaults = () => {
  const fetchData = async () => {
    try {
      const response = await axios(productsUrl);
      const response2 = await axios(randomUserUrl);
      console.log(response);
      console.log(response2);
    } catch (error) {}
    console.log("Global axios instance");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>GlobalDefaults</div>;
};

export default GlobalDefaults;
