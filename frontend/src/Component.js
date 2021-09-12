import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Component = () => {
  const [product, setproduct] = useState({
    name: "React from facebook",
    price: 10,
    productBy: "facebook",
  });
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    console.log(query.get('success'));

  }, []);

  return (
    <div>
      <form action="http://localhost:5000/payment" method="POST">
        
        <button className="btn-large blue">Buy react {product.price} </button>
        
      </form>
    </div>
  );
};

export default Component;
