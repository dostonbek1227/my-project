import React from "react";
import Card from "./Card";

export default function Filter() {
  return (
    <div className="filter">
      <div className="container">
        <div className="catalog">
          <p>Каталог</p>
        </div>
        <div className="filter1">
          <div className="slider">
            <p className="filter-p">Фильтры</p>
            <i class="fa-solid fa-sliders"></i>
          </div>
          <div className="slider1">
            <p className="filter-p1">Фильтры</p>
            <i class="fa-solid fa-sliders"></i>
          </div>
        </div>
        <div className="product-parent">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    </div>
  );
}
