import React, { useContext } from "react";
import { ToDoContext } from "../../context";
import empty from "../../assets/img/empty_cart.png";
import ProductCard from "../ProductCard";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
    const {favorite} = useContext(ToDoContext)
  return (
    <div>
      <div className="container">
        <div className="mt-[70px] flex items-center gap-[10px] flex-wrap">
          {favorite.map((el, idx) => (
            <ProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
