import React from "react";
import { useFichGif } from "../hooks/useFichGif";
import {GifgridItem} from './GifgridItem';
// import { Getgif } from "./helpers/getgif";

export const Gifgrid = ({ category }) => {
  const { data:images ,loading } = useFichGif(category);

  return (
    <>
      <h1 className="text-3xl font-bold text-center">{category}</h1>

      {loading && "cargandoo..." }
      <div className="card-grid flex flex-row">
      <br/>
         {
             images.map((img)=>(

                 <GifgridItem key={img.id} {...img}/>
             ))
         }
    </div> 
    </>
  );
};
