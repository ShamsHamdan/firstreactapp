import React, { Component } from "react";
import style from "./Portfolio.module.css";
export default class Portfolio extends Component {
    render() {
    return (
        <>
        <section className={` ${style.portfolio} d-flex justify-content-center align-items-center flex-column`}>
            <div className="container d-flex justify-content-center align-items-center flex-column">
            <h2 className="">PORTFOLIO</h2>
            <div className={`${style[`formd`]}`}>
                <div className={`${style.lineone}`}></div>
                <div className={` ${style.icon}`}>
                <i class="fa-solid fa-star"></i>
                </div>
                <div className={`${style.linetwo}`}></div>
            </div>
            
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-md-6 col-sm-12   mb-5'>
                    <div className={`${style[`portfolio-item`]} mx-auto`}>
                <img src="assets/img/cabin.png" className=' h-auto' />
                <div className={` ${style[`portfolio-hov`]} d-flex justify-content-center align-items-center h-100 w-100`}>
                    <div className={` ${style[`portfolio-hov-contant`]} text-center text-white `}>
                    <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12  mb-5'>
                    <div className={` ${style[`portfolio-item`]} mx-auto`}>
                <img src="assets/img/cake.png"  className=' h-auto'/>
                <div className={` ${style[`portfolio-hov`]} d-flex justify-content-center align-items-center h-100 w-100`}>
                    <div className={` ${style[`portfolio-hov-contant`]} text-center text-white `}>
                    <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12  mb-5'>
                    <div className={`${style[`portfolio-item`]} mx-auto`}>
                <img src="assets/img/circus.png"  className=' h-auto'/>
                <div className={` ${style[`portfolio-hov`]} d-flex justify-content-center align-items-center h-100 w-100`}>
                    <div className={` ${style[`portfolio-hov-contant`]} text-center text-white `}>
                    <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6 col-sm-12   mb-5'>
                    <div className={`${style[`portfolio-item`]} mx-auto`}>
                <img src="assets/img/game.png"  className=' h-auto'/>
                <div className={` ${style[`portfolio-hov`]} d-flex justify-content-center align-items-center h-100 w-100`}>
                    <div className={` ${style[`portfolio-hov-contant`]} text-center text-white `}>
                    <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6  mb-5'>
                    <div className={`${style[`portfolio-item`]} mx-auto`}>
                <img src="assets/img/safe.png"  className=' h-auto'/>
                <div className={` ${style[`portfolio-hov`]} d-flex justify-content-center align-items-center h-100 w-100`}>
                    <div className={` ${style[`portfolio-hov-contant`]} text-center text-white `}>
                    <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-6  mb-5'>
                    <div className={`${style[`portfolio-item`]} mx-auto`}>
                <img src="assets/img/submarine.png" className=' h-auto' />
                <div className={` ${style[`portfolio-hov`]} d-flex justify-content-center align-items-center h-100 w-100`}>
                    <div className={` ${style[`portfolio-hov-contant`]} text-center text-white `}>
                    <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                    </div>
                </div>
            </div>


            </div>

            
            
        </section>
        </>
    );
}
}
