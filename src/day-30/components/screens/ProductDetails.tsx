import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const ProductDetails = () => {
  const products = useSelector((state: any) => state.products);
  const { id } = useParams<{ id: string }>();

  // const currProduct = products[+id - 1];
  const currProduct = products.find((product: any) => {
    console.log(product);
    // eslint-disable-next-line eqeqeq
    return product.id == id;
  });

  // console.log(id);
  // console.log(currProduct);
  return (
    <div className="product-details d-flex justify-content-evenly ">
      <div>
        <img width="300" height="400" src={currProduct.image} alt="" />
      </div>
      <div className="w-50">
        <h1>{currProduct.title}</h1>
        <p>{currProduct.description}</p>
        <h2>Price: ₹ {currProduct.price * 1000}</h2>
        <div>
          <button className="btn btn-outline-primary btn-lg ">Buy Now</button>
          <button className="btn btn-outline-primary btn-lg ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
