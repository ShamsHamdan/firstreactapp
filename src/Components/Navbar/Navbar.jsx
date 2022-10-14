import React, { Component } from 'react'
import style from './Navbar.module.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className={` navbar ${style.navbarr} navbar-expand-lg  fixed-top `}>
        <div className="container">
            <a className={`navbar-brand ${style[`navbar-brandd`]}`} href="#">START BOOTSTRAP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
        <div className={`  ${style[`nav-ul`]} collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link me-4" aria-current="page" href="#">PORTFOLIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link me-4"href="#">ABOUT</a>
              </li>
            
              <li className="nav-item">
                <a className="nav-link"  href="#">CONTACT</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    )
  }
}
