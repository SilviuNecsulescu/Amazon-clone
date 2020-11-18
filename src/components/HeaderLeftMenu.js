import React, { useState, useEffect } from "react";
import "../css/HeaderLeftMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, SIGN_OUT } from "../features/user/userSlice";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "../app/firebase";

function HeaderLeftMenu({ products }) {
  const [categ, setCateg] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const newArray = [];
    products.map((product) => newArray.push(product.category));
    setCateg(newArray.filter((v, i, a) => a.indexOf(v) === i));
  }, [products]);

  const handleClick = () => {
    auth
      .signOut()
      .then(function () {
        dispatch(SIGN_OUT());
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className="headerLeftMenu">
      <div className="headerLeftMenu__header">
        <ExitToAppIcon
          className="headerLeftMenu__signOut"
          onClick={handleClick}
        />
        <h3>Hello, {user?.length > 0 ? user.toString() : "sign in"}</h3>
      </div>
      <div className="headerLeftMenu__categories">
        <h3>Categories</h3>
        {categ &&
          categ.map((item, index) => (
            <p key={index}>
              <span>{item}</span>
            </p>
          ))}
      </div>
    </div>
  );
}

export default HeaderLeftMenu;
