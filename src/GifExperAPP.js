import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Gifgrid } from "./components/Gifgrid";

export const GifExperAPP = () => {
  //let  categorias = ['one puch', 'samurai X', 'Dragron ball'];
  const [categorias, setcategoria] = useState([""]);
  //   const handleAdd = () => {
  //     // setcategoria( categoria=>[...categoria, 'jaider ']);
  //     setcategoria([...categorias,'jaider'])
  //     console.log(categorias)
  //   };
  return (
    <>
      <h2  className="text-4xl font-bold text-center"> GifExperAPP</h2>
      <AddCategory setcategoria = {setcategoria} />
      <hr />

      <ol>
        {categorias.map((img) => (
          <Gifgrid key={img} category={img} />
        ))}
      </ol>
    </>
  );
};

//export default GifExperAPP
