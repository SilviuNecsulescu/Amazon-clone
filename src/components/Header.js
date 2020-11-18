import React, { useEffect, useState } from "react";
import "../css/Header.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basket/basketSlice";
import { Link } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";

function Header({
  openMenu,
  products,
  handleOnChange,
  dropDown,
  handleDropDownChange,
}) {
  const [categ, setCateg] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const basketItems = useSelector(selectBasket);

  useEffect(() => {
    const newArray = [];
    products.map((product) => newArray.push(product.category));
    setCateg(newArray.filter((v, i, a) => a.indexOf(v) === i));
  }, [products]);

  useEffect(() => {
    let totalItems = 0;
    basketItems.map((item) => (totalItems += item.quantity));
    setTotalItems(totalItems);
  }, [basketItems]);
  //console.log(basketItems);

  const user = useSelector(selectUser);

  return (
    <div className="header">
      <div className="header__left">
        <a className="header__burger" onClick={openMenu}>
          <i className="header__burgerIcon"></i>
        </a>
        <div className="header__logoContainer">
          <Link className="header__logoLink" to="/">
            <span className="header__logo"></span>
            <span className="header__logoText">.co.uk</span>
          </Link>
        </div>
      </div>

      <div className="header__center">
        <FormControl className="header__dropdown">
          <Select
            value={dropDown}
            onChange={(e) => handleDropDownChange(e.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            {categ &&
              categ.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <input
          type="text"
          className="header__search"
          placeholder="You can search for a specific product"
          onChange={(e) => handleOnChange(e.target.value)}
        />
        <button type="submit" className="header__searchButton">
          Search
        </button>
      </div>

      <div className="header__right">
        <div className="header__signin">
          <Link to="/signin">
            <span>Hello, {user?.length > 0 ? user.toString() : "sign in"}</span>
            <span>Account & Lists</span>
          </Link>
        </div>
        <div className="header__returns">
          <Link to="/">
            <span>Returns</span>
            <span>& Orders</span>
          </Link>
        </div>
        <div className="header__prime">
          <Link to="/">
            <span>Try</span>
            <span>Prime</span>
          </Link>
        </div>
        <div className="header__cart">
          <Link to="/basket">
            <div>
              <span>{totalItems}</span>
              <span className="header__cartIcon"></span>
            </div>
            <div className="header__cartText">Basket</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
