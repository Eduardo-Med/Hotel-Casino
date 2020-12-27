import React from "react";

export default function OpcionMenu({nombre,imagen,opcion}) {
  return (
    <div className={`menu_1 ${opcion}`}>
      <h3 className="">{nombre}</h3>
      <img src={imagen} alt={nombre}/>
    </div>
  );
}
