import React from "react";
import Product from "./Product";
import banner from "../assets/amazon-banner.jpg";
import "../css/MainContent.css";

function MainContent({ products }) {
  return (
    <div className="mainContent">
      <div className="mainContent__banner">
        <img src={banner} alt="Amazon banner" />
      </div>
      <div className="mainContent__productsList">
        {products &&
          products.map(({ title, id, description, image, price }) => (
            <Product
              key={id}
              id={id}
              title={title}
              desc={description}
              imageUrl={image}
              rating={Math.floor(Math.random() * 5 + 1)}
              price={price}
            />
          ))}
      </div>
    </div>
  );
}

export default MainContent;
