import React, { useState } from "react";
import "../css/Product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT } from "../features/basket/basketSlice";
import { formatText } from "../utils";
import { Modal } from "@material-ui/core";

const ratingStars = {
  1: "⭐",
  2: "⭐⭐",
  3: "⭐⭐⭐",
  4: "⭐⭐⭐⭐",
  5: "⭐⭐⭐⭐⭐",
};

function Product({ title, desc, rating, price, imageUrl, id }) {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      ADD_PRODUCT({
        title,
        desc,
        rating,
        price,
        id,
        imageUrl,
        quantity: 1,
      })
    );
    handleModal();
  };
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 1000);
  };

  return (
    <div className="product">
      <Modal
        className="product__modal"
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h3>This product has been added to your basket</h3>
      </Modal>
      <div className="product__card">
        <h2 className="product__title">
          <Link to={`/product/${id}`}>{formatText(title, 20)}</Link>
        </h2>
        <p className="product__desc">{formatText(desc, 100)}</p>
        <img className="product__image" alt="product " src={imageUrl} />
        <p className="product__rating">
          <strong>Rating :</strong> {ratingStars[rating]}
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button className="product__addButton" type="button" onClick={addItem}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
