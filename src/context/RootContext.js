import React, { useEffect, useState } from "react";
import { ToDoContext } from ".";

const RootContext = ({ children }) => {
  const [toDo, setToDo] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const getAll = () => {
    let res = JSON.parse(localStorage.getItem("todo")) || [];
    setToDo(res);
  };

  const sorting = (expens) => {
    let res = JSON.parse(localStorage.getItem("todo")) || [];
    if (expens === "cheap") {
      res.sort((a, b) => a.price - b.price);
    } else if (expens === "expensive") {
      res.sort((a, b) => b.price - a.price);
    }
  localStorage.setItem("todo" , )
  };


  useEffect(() => {
    getAll();
  }, []);

  return (
    <ToDoContext.Provider
      value={{
        toDo,
        setToDo,
        favorite,
        setFavorite,
        sorting,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default RootContext;
