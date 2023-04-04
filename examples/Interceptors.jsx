// import React from "react";
// import { useEffect } from "react";
// import authFetch from "../Axios/Interceptors";

// const url = "https://course-api.com/react-store-products";

// const Interceptors = () => {
//   console.log("in interceptors");
//   const fetchData = async () => {
//     try {
//       const response = await authFetch("/react-store-products");
//       console.log("request sent");
//     } catch (error) {}
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return <div>Interceptors</div>;
// };

// export default Interceptors;
import { useEffect } from "react";
import authFetch from "../Axios/Interceptors";
const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/react-store-products");
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
