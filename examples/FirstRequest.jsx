import React from "react";
import { useEffect } from "react";

import axios from "axios";

const url = "https://course-api.com/react-store-products";
const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
    console.log("first axios request");
  }, []);

  return <div className="text-center">FirstRequest</div>;
};

export default FirstRequest;
