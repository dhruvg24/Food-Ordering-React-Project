import React from "react";
import "./styles.css";
import emptyCartImg from "./emptyCartImage.png";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
    const navigate = useNavigate();
  return (
    <div className="emptyCart">
      <img src={emptyCartImg} alt="empty" />
      <button onClick={()=>navigate("/")}>
        <i className="fas fa-long-arrow-alt-left"></i> Order Now
      </button>
    </div>
  );
};

export default EmptyCart;
