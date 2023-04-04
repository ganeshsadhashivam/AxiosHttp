import React from "react";
import axios from "axios";
import { useEffect } from "react";
import authFetch from "./Custom";
const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch("/react-store-products");
      const response2 = await axios(randomUserUrl);
    } catch (error) {}
    console.log("custom instance");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>CustomInstance</div>;
};
export default CustomInstance;
