import React from 'react'
import "./karzinka.scss"



const Karzinka = () => {
  return (
    <>
        <div id="karzinka">
            <div className="container karzinka">
                <p className='karzinka__text'>Home / <span>Cart</span></p>
                <div className="karzinka__template">
                    <h3>Product</h3>
                    <h3>Price</h3>
                    <h3>Quantity</h3>
                    <h3>Subtotal</h3>
                </div>
                <div className="karzinka__row">
                    <div className="karzinka__card">
                        <div>
                            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                            <h3>LCD Monitor</h3>
                        </div>
                        <h3>$650</h3>
                        <h3>Quantity</h3>
                        <h3>$650</h3>
                    </div>
                </div>
                <div className="karzinka__button">
                    <button>Return To Shop</button>
                    <button>Update Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Karzinka