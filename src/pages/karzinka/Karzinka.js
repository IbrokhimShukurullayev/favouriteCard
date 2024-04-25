import React , {useEffect , useState} from 'react'
import "./karzinka.scss"

import axios from "axios"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCard } from '../../context/karzinkaSlice'
import { inCart } from '../../context/karzinkaSlice'
import { decCart } from '../../context/karzinkaSlice'
import { remove } from '../../context/karzinkaSlice'
import { clear } from '../../context/karzinkaSlice'

const API_URL = "https://fakestoreapi.com/products/"

const Karzinka = () => {
    const dispatch = useDispatch()
    const [data , setData] = useState([])
    const karzinka = useSelector(state => state.karzinka.value)
    console.log(karzinka);

    const handlsubmit =(el) => {
        if(el.quantity <= 1) {
            dispatch(remove(el))
        } else {
            dispatch(decCart(el))
        }
    }

    useEffect(()=> {
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    let products = karzinka?.map (el => (
        <div key={el.id} className="karzinka__card"><div>
                <img src={el.image} alt="" />
                <h3>{el.title}</h3>
            </div>
            <h3>${el.price}</h3>
            <div>
                <button onClick={() => dispatch(inCart(el))} >+</button>
                <span>{el.quantity}</span>
                <button  onClick={() => handlsubmit(el)}>-</button>
            </div>
            <h3>${(el.price * el.quantity).toFixed(1)}</h3>
        </div>
    ))
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
                <div className="div">
                    <button onClick={() => dispatch(clear())} className="clear">
                        Clear All
                    </button>
                </div>
                <div className="karzinka__row">
                    {
                        products
                    }
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