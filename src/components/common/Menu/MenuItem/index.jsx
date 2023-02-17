import React from "react";
import "./styles.css"
import ButtonAddRemoveItem from "../../ButtonAddRemoveItem";
// import { MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsCount } from "../../../../redux/cart/cart.selector";
import { cartAddItem ,cartRemoveItem} from "../../../../redux/cart/cart.action";
import { connect } from "react-redux";


// destructure with attributes
const MenuItem = ({item, cartCount, cartList, cartAddItem , cartRemoveItem}) => {
  const {id, name, info, price, img} = item;

  const handleItemQuantity = ()=>{
    let quantity = 0;
    if(cartCount!==0){
      const foundItemInCart = cartList.find(item=>item.id === id);

      if(foundItemInCart){
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  }
  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info"><small>{info}</small></p>
      </div>
      <div className="item-foot_desc">
        <span className="foot_desc-price">${price}</span>
        {/* <button>Add +</button> */}
        <ButtonAddRemoveItem quantity = {handleItemQuantity()} handleAddItem = {()=>cartAddItem(item)}
        handleRemoveItem = {()=>cartRemoveItem(item)} />

      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = dispatch => ({
  cartAddItem: item=>dispatch(cartAddItem(item)),
  cartRemoveItem: item=>dispatch(cartRemoveItem(item)),

})

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
