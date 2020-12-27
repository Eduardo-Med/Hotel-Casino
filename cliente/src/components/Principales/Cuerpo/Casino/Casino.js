import React from "react";
import "./casino.css";

export default function Casino() {
  return (
    <div className="hotel-casino p-4" id="Casino">
      <h1 className="mt-5 text-center">Casino</h1>
      <div className="restaurante-informacion">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit vero
          ipsa necessitatibus? Ex corrupti sunt earum esse cumque, expedita quis,
          obcaecati explicabo commodi doloremque illo.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quae sit
          sint accusantium, culpa cupiditate totam. Nobis possimus sapiente maxime
          quam. Voluptatibus hic quia in.
        </p>
      </div>
      <div className="imagenes-restaurant">
          <div className="conjunto-imagenes">
            <img src="https://c1.wallpaperflare.com/preview/698/184/958/wynn-casino-las-vegas-gambling-resort.jpg" alt="mesas"/>
            <img src="https://c1.wallpaperflare.com/preview/428/215/784/arcade-chair-arcade-machine-retro.jpg" alt="mesas"/>
            <img src="https://c4.wallpaperflare.com/wallpaper/362/862/388/addiction-bet-betting-casino-wallpaper-preview.jpg" alt="mesas"/>
            <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/04/16/15238855373879.jpg" alt="mesas"/>
            <button className="btn btn-success mt-4 boton-informacion">Mas información</button>
          </div>
      </div>
      <div className="boton-informacion2">
          <button className="btn btn-success mt-4 btn-lg btn-block">Mas información</button>
      </div>
    </div>
  );
}
