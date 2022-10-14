import React, { Component } from 'react'
import style from './Contact.module.css'
export default class Contact extends Component {
  render() {
    return (
        <>
    <section className={` ${style.Contact} d-flex justify-content-center align-items-center flex-column`}>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h2 className="">CONTACT</h2>
                <div className={`${style[`formd`]}`}>
                    <div className={`${style.lineone}`}></div>
                    <div className={` ${style.icon}`}><i class="fa-solid fa-star"></i></div>
                    <div className={`${style.linetwo}`}></div>
                </div>
            
            
            <div className={`${style.information}`}>
                <div className='row text-center px-5'>
                    <div className=" py-2  text-center"> <input type="text" className={` ${style.formInput}  py-3 w-100 `} placeholder="Full name" /></div>
                <div>
                <div className=" py-2 text-center"> <input type="email" className={` ${style.formInput}  py-3 w-100 `} placeholder="Email address" /></div>
                <div className=" py-2 text-center"> <input type="number" className={` ${style.formInput}  py-3 w-100 `} id="inputEmail3" placeholder="Phone number" /></div>
                <div className=" py-2 text-center">  <textarea className={` ${style.formInput}  py-3 w-100 `} rows={3} placeholder="Message" defaultValue={""} /></div>
                </div>

                
                </div>
                <div className=" px-5 pt-2 "><button className="btn  btn-xl px-4 py-3 text-white fw-semibold" type="submit">Send</button></div>
            </div>
        

        </div>
    </section>

        </>
    )
}
}
