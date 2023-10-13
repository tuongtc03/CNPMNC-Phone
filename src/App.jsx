import { useState } from "react";
import "./App.css";
import * as React from "react";
import { Header } from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Pages } from "./pages/Pages";
import Data from "./component/flashDeals/Data";
import Sdata from "./component/shop/Sdata";
import { Cart } from "./pages/cart/Cart";
import { Footer } from "./common/footer/Footer";
import { ProductDetail } from "./pages/productdetail/ProductDetail";

function App() {
  //step 1: fetch data from DB
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCardItem] = useState([]);
  const [productItem, setProductItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id == product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id == product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  const itemDetail = (product) => {
    const productExist = productItem.find((item) => item.id == product.id);

    if (!productExist) {
      setProductItem([...productItem, product]);
    }
  };
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id == product.id);
    if (productExit.qty == 1) {
      setCardItem(cartItem.filter((item) => item.id != product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id == product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              itemDetail={itemDetail}
              shopItems={shopItems}
            />
          </Route>
          <Route path="/cart" exact>
            <Cart
              cartItem={cartItem}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
          <Route path="/productdetail/:id">
            <ProductDetail
              productItems={productItems}
              addToCart={addToCart}
              decreaseQty={decreaseQty}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
