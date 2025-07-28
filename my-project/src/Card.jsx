import React from "react";

export default function Card() {
  return (
    <div className="parfyum">
      <img src="./img/card-img.png" alt="" />
      <p>The devil is a loser by Mushfig</p>
      <p>Объем мл.</p>
      <div className="tugmalar">
        <div className="potfyum-button">10</div>
        <div className="potfyum-button">30</div>
        <div className="potfyum-button">50</div>
        <div className="potfyum-button">100</div>
      </div>
      <p className="stoimost">
        Стоимость: <span> 2 400,00 ₽</span>
      </p>
      <button className="korzinka">в корзину</button>
    </div>
  );
}
