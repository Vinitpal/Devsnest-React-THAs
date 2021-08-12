import React from "react";

import CardComponent from "../Card";

const ProductListing = () => {
  const products = [
    {
      id: 1,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
    {
      id: 2,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
    {
      id: 3,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
    {
      id: 4,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
    {
      id: 5,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
    {
      id: 6,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
    {
      id: 7,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
    {
      id: 8,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
    {
      id: 9,
      title: "The Comedy of Errors",
      description: "lorem ipsum dolor sit amet ",
      image:
        "https://cdn.discordapp.com/attachments/753151975570276352/866613538507587594/unknown.png",
      price: 1000,
    },
  ];

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-around pb-4">
      {products.map((product) => (
        <CardComponent
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductListing;
