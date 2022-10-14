import React, { Component } from 'react'
import style from './About.module.css'
export default class About extends Component {
  render() {
    return (
        <>
            <section className={` ${style.about} d-flex justify-content-center align-items-center flex-column text-white`}>
                <div className='container d-flex justify-content-center align-items-center flex-column'>
                <h2 className="">ABOUT</h2>
            <div className={`${style[`formd`]}`}>
                <div className={`${style.lineone}`}></div>
                <div className={` ${style.icon}`}>
                <i class="fa-solid fa-star"></i>
                </div>
                <div className={`${style.linetwo}`}></div>
            </div>

            <div className='row'>
                <div className='col-lg-4 ms-auto'>
                    <p className={`${style.para}`}>Freelancer is a free bootstrap theme 
                    created by Start Bootstrap. The download includes the complete source files
                    including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className='col-lg-4 me-auto'>
                <p className={`${style.para}`}>You can create your own custom avatar for 
                the masthead, change the icon in the dividers, 
                and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
            
            <div className={` ${style.butt} text-center mt-4`}>
                <a className={`${style.but} btn btn-outline-light d-flex justify-content-center align-items-center `}>
                    
                <i class="fa-solid fa-download "></i>
                Free Downlode!
                
                </a>

            </div>

                </div>
            </section>

        </>
    )
  }
}
