import React, { useEffect, useState } from "react";
import "../css/ProductDetails.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  var { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    var fetchUrl = `https://fakestoreapi.com/products/${id}`;
    const fetchData = async () =>
      await fetch(fetchUrl)
        .then((res) => res.json())
        .then((json) => setProductDetails(json))
        .then(() => setIsLoaded(true));

    fetchData();
  }, [id]);

  return (
    <div className="productDetails">
      <div className="productDetails__goBack">
        <Link to="/">◀️ Go Back to Homepage</Link>
      </div>
      {isLoaded ? (
        <div className="productDetails__container">
          <div>
            <h1 className="productDetails__title">{productDetails.title}</h1>
            <img
              className="productDetails__image"
              src={productDetails.image}
              alt="product details"
            />
          </div>
          <div>
            <h1>Description</h1>
            <p className="productDetails__description">
              {productDetails.description}
            </p>
            <p>
              <strong>Category : </strong>
              {productDetails.category}
            </p>
            <p>
              <strong>Price : </strong>
              <small>$</small>
              <strong>{productDetails.price}</strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="productDetails__container">
          <h1>Loading Product details...</h1>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
