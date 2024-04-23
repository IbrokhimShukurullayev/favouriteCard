import React from 'react'
import "./footer.scss"

import { AiOutlineSend } from "react-icons/ai";
import footerApp from "../../assets/images/footer1.png"
import social from "../../assets/images/socila.png"

const Footer = () => {
  return (
    <footer id='footer'>
        <div className='footers'>
            <div className="container footer">
                <ul className='footer__list-1'>
                    <li><h2>Exclusive</h2></li>
                    <li><h3>Subscribe</h3></li>
                    <li><p>Get 10% off your first order</p></li>
                    <li className='footer__input'><input placeholder='Enter your email' type="text" /> <AiOutlineSend/></li>
                </ul>
                <ul className='footer__list__link'>
                    <li><h4>Support</h4></li>
                    <li><p>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p></li>
                    <li><p>exclusive@gmail.com</p></li>
                    <li><p>+88015-88888-9999</p></li>
                </ul>
                <ul className='footer__list__link'>
                    <li><h4>Account</h4></li>
                    <li><p>My Account</p></li>
                    <li><p>Login / Register</p></li>
                    <li><p>Cart</p></li>
                    <li><p>Wishlist</p></li>
                    <li><p>Shop</p></li>
                </ul>
                <ul className='footer__list__link'>
                    <li><h4>Quick Link</h4></li>
                    <li><p>Privacy Policy</p></li>
                    <li><p>Terms Of Use</p></li>
                    <li><p>FAQ</p></li>
                    <li><p>Contact</p></li>
                </ul>
                <ul className='footer__list-2'>
                    <li><h2>Download App</h2></li>
                    <li><p>Save $3 with App New User Only</p></li>
                    <li><img src={footerApp} alt="" /></li>
                    <li className='social'><img src={social} alt="" /></li>
                </ul>
            </div>
        </div>
        <h2 className="footer__title">
             Copyright Rimel 2022. All right reserved
        </h2>
    </footer>
  )
}

export default Footer