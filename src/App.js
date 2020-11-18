import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import HeaderLeftMenu from "./components/HeaderLeftMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Basket from "./components/Basket";
import SignIn from "./components/SignIn";
import { auth } from "./app/firebase";
import { SET_USER } from "./features/user/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dropDown, setDropDown] = useState("all");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch(SET_USER(authUser.displayName));
      } else {
        dispatch(SET_USER(null));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () =>
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          setFilteredProducts(json);
        });

    fetchData();
  }, []);

  const openMenu = () => {
    if (menuOpened) {
      setMenuOpened(false);
    } else {
      setMenuOpened(true);
    }
    //console.log(menuOpened);
  };

  const handleDropDownChange = (val) => {
    setDropDown(val);

    setFilteredProducts((prev) =>
      products.filter(
        (item) =>
          (item.category === val || val === "all") &&
          item.title.toLowerCase().includes(search)
      )
    );
  };

  const handleOnChange = (val) => {
    setSearch(val);
    setFilteredProducts((prev) =>
      products.filter(
        (item) =>
          (item.category === dropDown || dropDown === "all") &&
          item.title.toLowerCase().includes(val)
      )
    );
  };

  //console.log(filteredProducts);

  return (
    <div className={`app ${menuOpened && "header__menuOpened"}`}>
      <div
        className="headerLeftMenu__closeButton"
        onClick={() => setMenuOpened(false)}
      ></div>

      <Router>
        <HeaderLeftMenu products={products} />
        <Header
          openMenu={openMenu}
          products={products}
          handleOnChange={handleOnChange}
          dropDown={dropDown}
          handleDropDownChange={handleDropDownChange}
        />
        <Switch>
          <Route exact path="/">
            <MainContent products={filteredProducts} />
          </Route>
          <Route path="/product/:id" component={ProductDetails}></Route>
          <Route path="/basket" component={Basket}></Route>
          <Route path="/signin" component={SignIn}></Route>
        </Switch>
      </Router>

      <Footer />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
