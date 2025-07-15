import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container navbar-content">
        <div className="pointer">
          <img className="img" src="./img/mouse-pointer-2.png" alt="" />
          <p className="nav-p">Ваш город: Москва</p>
        </div>
        <div>
          <ul className="navbar-nav">
            <li>
              <a href="#!" className="nav-link">
                Бонусы
              </a>
            </li>
            <li>
              <a href="#!" className="nav-link">
                Документация
              </a>
            </li>
            <li>
              <a href="#!" className="nav-link">
                О нас
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-phone">
          <i class="fa-solid fa-phone-volume"></i>
          <li className="phone">
            <a href="tei:7(937) 136 - 77 - 66">7(937) 136 - 77 - 66</a>
          </li>
        </div>
      </div>
      <div className="container nav-content">
        <div>
          <div className="img">
            <img src="./img/porfyum.png" alt="" />
          </div>
        </div>
        <div className="katalog">
          <i class="fa-solid fa-bars-staggered"></i>
          <h2>Каталог</h2>
        </div>
        <div className="input">
            <input type="text" placeholder="Найти парфюм.." />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icon">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-bag-shopping"></i>
        </div>
      </div>
    </div>
  );
}
