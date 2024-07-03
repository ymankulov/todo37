import React, { useContext, useEffect } from "react";
import { ToDoContext } from "../../context";
import ToDo from "../ToDo";
import ProductCard from "../ProductCard";
import empty from "../../assets/img/empty_cart.png";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { toDo, getAll } = useContext(ToDoContext);
  const navigate = useNavigate();

  const sorting = (expens) => {
    if (expens === "cheap") {
      toDo.sort((a, b) => +a.price - +b.price);
      getAll();
    } else if (expens === "expensive") {
      toDo.sort((a, b) => {
        return +b.price - +a.price;
      });
      getAll();
    }
  };


  return (
    <div>
      <div className="container">
        <select
          style={{
            background: "white",
          }}
          onChange={(e) => sorting(e.target.value)}
        >
          <option value="expensive">expensive</option>
          <option value="cheap">cheap</option>
        </select>
        <div className="mt-[70px] flex items-center gap-[10px] flex-wrap">
          {toDo.length ? (
            <>
              {toDo.map((el, idx) => (
                <ProductCard el={el} key={idx} />
              ))}
            </>
          ) : (
            <img
              className="mr-auto flex m-auto"
              onClick={() => navigate("/")}
              src={empty}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
