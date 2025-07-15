import React from 'react'

export default function Aromat() {
  return (
    <div className='aromat'>
      <div className="container aromat-content">
      <div className="img1">
      <div className='dlya'>
          <p>Для неё</p>
      </div>
       <div className='secret'>
         <p className='secret-p'>Victoria Secret Bombshell</p>
         <button className='button'>в корзину</button>
       </div>
      </div>
      <div className="img2">
     <div className='nego'>
       <p>Для него</p>
     </div>
      <div className='aventus'>
          <p className='aventus-p'>Aventus By Creed</p>
          <button className='button'>в корзину</button>
      </div>
      </div>
      <div className="img3">
   <div className='uniseks'>
       <p>Унисекс</p>
   </div>
      <div className='narkotik'>
          <p className='narkotik-p'>Narcotiqe</p>
          <button className='button'>в корзину</button>
      </div>
      </div>
        </div> 
    </div>
  )
}
