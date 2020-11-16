import React, { useState, useEffect } from "react";
import "../css/Basket.css";
import {
  selectBasket,
  INCREASE_Q,
  REMOVE_PRODUCT,
} from "../features/basket/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import basketImage from "../assets/amazon-basket.svg";

function Basket() {
  const basketProducts = useSelector(selectBasket);
  const dispatch = useDispatch();
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  var itemCount = basketProducts.length;

  useEffect(() => {
    let totalItems = 0;
    let totalPrice = 0;
    basketProducts.map((item) => {
      return (
        (totalItems += item.quantity),
        (totalPrice += item.quantity * item.price)
      );
    });
    setTotalItems(totalItems);
    setTotalPrice(totalPrice);
  }, [basketProducts]);

  const addItem = (id) => {
    dispatch(INCREASE_Q(id));
  };

  const removeItem = (id) => {
    dispatch(REMOVE_PRODUCT(id));
  };
  return (
    <div className="basket">
      <div className="basket__header">
        <img src={basketImage} alt="basket" />
        <div>
          <h1>{`${
            itemCount > 0
              ? "You can check your Amazon items below"
              : "Your Amazon basket is empty."
          }`}</h1>
          <span>
            The price and availability of items at Amazon.co.uk are subject to
            change. The shopping basket is a temporary place to store a list of
            your items and reflects each item's most recent price.
          </span>
        </div>
      </div>
      <div className="basket__items">
        <div>
          <h3>
            Items : {totalItems}. Total price : <small>$</small>
            <strong>{totalPrice.toFixed(2)}</strong>
          </h3>
        </div>
        {itemCount > 0 ? (
          basketProducts.map(
            ({ title, imageUrl, price, desc, id, quantity }) => (
              <div className="basket__item" key={id}>
                <div>
                  <img src={imageUrl} alt={title} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <div>
                  <p>
                    <strong>Price</strong>
                  </p>
                  <p>
                    <small>$</small>
                    <strong>{price}</strong>
                  </p>
                </div>
                <div>
                  <p>Quantity</p>
                  <p>{quantity}</p>
                </div>
                <div className="basket__buttons">
                  <button onClick={() => addItem(id)}>+</button>
                  <button onClick={() => removeItem(id)}>-</button>
                </div>
              </div>
            )
          )
        ) : (
          <h3>No items</h3>
        )}
      </div>
    </div>
  );
}

export default Basket;
