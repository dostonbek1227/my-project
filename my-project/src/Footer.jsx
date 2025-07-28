import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="porfyum-img">
          <img className="publik-img" src="./img/porfyum.png" alt="" />
        </div>
        <div>
          <div className="malumot">
            <div className="ikonka">
              <div className="foter-icon">
                <i class="fa-solid fa-location-dot"></i>
                <p>г. Астрахань: ул. Свердлова, 106;ул. Победы 55А, пав. 10.</p>
              </div>
              <div className="foter-icon">
                <i class="fa-solid fa-clock"></i>
                <p>Ежедневно с 9:00 до 18:00</p>
              </div>
            </div>
            <div className="ikonka">
              <div className="foter-icon">
                <i class="fa-brands fa-whatsapp"></i>
                <p>Мы в Whatsapp</p>
              </div>
              <div className="foter-icon">
                <i class="fa-brands fa-telegram"></i>
                <p>Мы в Telegram</p>
              </div>
              <div className="foter-icon">
                <i class="fa-solid fa-comment-sms"></i>
                <p>parfumpomotivam@gmail.com</p>
              </div>
            </div>
            <div className="foter-icon">
              <i class="fa-solid fa-building"></i>
              <p>ИП РАГИМОВА А.М.К. ИНН 510704693888</p>
            </div>
          </div>
          <p className="parfum">
            © Parfumpomotivam 2023 Политика конфиденциальности
          </p>
        </div>
      </div>
    </div>
  );
}
