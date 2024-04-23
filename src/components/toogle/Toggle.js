import React from 'react'
import "./toogle.scss"

const Toggle = () => {
  return (
    <div id='toogle'>
        <div className="container toogle">
            <ul className="toogle__list">
                <li className='item'><p>Woman’s Fashion</p></li>
                <li><p>Men’s Fashion</p></li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
    </div>
  )
}

export default Toggle