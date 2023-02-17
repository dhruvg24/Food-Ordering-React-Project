import React from "react";
import Logo from "../../components/common/Logo";
import Menu from "../../components/common/Menu";
import MenuItem from "../../components/common/Menu/MenuItem";
import { connect } from "react-redux";
// import { menuItemsData } from "../../components/common/Menu/data";
import "./styles.css";
import Footer from "../../components/common/Footer";
import EmptyCart from "../../components/Cart/EmptyCart";
import { createStructuredSelector } from "reselect";
import {
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import { selectCartItems } from "../../redux/cart/cart.selector";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  // console.log(cartCount, cartList, cartTotal);
  return (
    <>
      {/* this is called react fragment */}
      <div className="cart-header">
        <Logo />
      </div>
      {/* display menu items using already created menu componenet */}

      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Your Orders</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
            {/* we have passed menuItemsData as props */}
          </div>

          <h3 className="orders-total">Your Total ${cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
