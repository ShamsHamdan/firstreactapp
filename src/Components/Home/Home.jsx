import React, { Component } from 'react'
import style from './Home.module.css'
export default class Home extends Component {
  render() {
    return (
      <>
      
     <header className={` ${style[`head`]} d-flex justify-content-center align-items-center flex-column   `}>
          <div className={ ` ${style[`home-contants`]} container d-flex justify-content-center align-items-center flex-column  `}>
              <img className={`text-center ${style[`imgg`]} `} src="assets/img/avataaars.svg" alt='header'  />
              <h1 className='mt-3'>START BOOTSTRAP</h1>
              <div className={`${style[`form`]}`}>
                <div className={`${style.linee}`}></div>
                <div className={` ${style.icon}`}><i class="fa-solid fa-star"></i></div>
                <div className={`${style.line}`}></div>
              </div>
              <p className="">Graphic Artist - Web Designer - Illustrator</p>
          </div>
</header>
      </>
    )
  }
}
