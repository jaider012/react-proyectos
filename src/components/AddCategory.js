import React, { useState } from "react";
import PropTypes from 'prop-types';



export const AddCategory = ({setcategoria}) => {
  const [Inputvalue, setinputvalue] = useState("");
  const handleinputChange = (e) => {
    setinputvalue(e.target.value);
  };
  const handleSumit = (e) => {
      e.preventDefault();
      if(Inputvalue.trim().length > 2){
      setcategoria(categoria => [Inputvalue,...categoria])
  }};
  return (

    <form onSubmit={handleSumit}>
      <input class=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="buscador de gifs" type="text" name="search"
        type="text"
        value={Inputvalue}
        onChange={handleinputChange}
      ></input>
      </form>
    
  );

};
AddCategory.prototype ={
    setcategoria: PropTypes.func.isRequired
  }