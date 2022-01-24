import React from "react";

export function GifgridItem({ id, title, url }) {
  // console.log( id, title, url );
  return (
  <div className="card basis-1/4  ">
    <img  src={url} alt={title}/>
    <p>{title}</p>
  </div>)
}

