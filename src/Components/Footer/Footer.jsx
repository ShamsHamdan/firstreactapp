import React, { Component } from 'react'
import style from './Footer.module.css'
export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className={`footer text-center`}>
        <div className='container'>
            <div className='row'>
                <div className={`col-lg-4 mb-5 mb-lg-0`}>
                    <h4 className='mb-4'>LOCATION</h4>
                    <p>2215 John Daniel Drive <br></br> Clark, MO 65243</p>
                </div>

                <div className={`col-lg-4 mb-5 mb-lg-0`}>
                    <h4 className='mb-4'>AROUND THE WEB</h4>
                    <div class={` ${style[`footer-link`]}`}>
            <a href="#" class="f"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="t"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="l"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" class="d"><i class="fa-brands fa-dribbble"></i></a>
         </div>
                </div>

                <div className={`col-lg-4 mb-5 mb-lg-0`}>
                    <h4 className='mb-4'>ABOUT FREELANCER</h4>
                    <p className={`${style.boot}`}>Freelance is a free to use, MIT licensed Bootstrap theme created by <span>Start Bootstrap </span>.</p>
                </div>

            </div>
        </div>
            
      </footer>
      <div className={`${style[`footer-second`]} py-4 text-white`}>
                <div className='container'>
                    <p>Copyright © Your Website 2022</p>
                </div>
            </div>
      </>
    )
  }
}
