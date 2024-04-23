import React , {useState , useEffect} from 'react'
import axios from "axios"
import "./Single.scss"
// import star from "../../assets/images/star.png"
// import food  from "../../assets/images/category-1.svg.png"

import { IoIosStar } from "react-icons/io";
import {useParams} from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";


const API_URL = "https://fakestoreapi.com/products/"

function Single() {
  const {id} = useParams()

  const [data , setData] = useState([])
  const [loading, setLoading] = useState(false)
      let [count , setCuont] = useState(0)

  window.scrollTo(0,0)

  useEffect(()=> {
    setLoading(true)
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    let findProduct = data.find(el => el.id === +id)


  return (
    <>
        <div id="single">
            <div className="container">
                <div className="single">
                    <div className="single__left">
                        <div className="single__home__left">
                            <div className="single__bg-img">
                                <img src={findProduct?.image} alt="" />
                            </div>
                            <div className='single__litle-img'>
                                <img src={findProduct?.image} alt="" />
                                <img src={findProduct?.image} alt="" />
                                <img src={findProduct?.image} alt="" />
                                <img src={findProduct?.image} alt="" />
                                <img src={findProduct?.image} alt="" />
                            </div>
                        </div>
                        <div className="single__home__right">
                            <p className='single__home__right__title'>Sale off</p>
                            <h2 className="single__home__right__text">
                                Seeds of Change Organic Quinoa, Brown
                            </h2>
                            <div className="rating">
                                {/* <img src={star} alt="" /> */}
                                <p>({findProduct?.rating.rate} reviews)</p>
                            </div>
                            <div className="single__home__right__price">
                                <div>
                                    <h2>
                                        ${findProduct?.price.toFixed(1) * count}
                                    </h2>
                                </div>
                                <div>
                                    <h3>
                                        26% Off
                                    </h3> 
                                    <p>
                                        $52
                                    </p>
                                </div>
                            </div>
                            <p className="single__home__right__list">
                                {findProduct?.description}
                            </p>
                            <div className="single__inform__right__weight">
                                <h3>Size :</h3>
                                <span>XS</span>
                                <span>S</span>
                                <span>M</span>
                                <span>L</span>
                                <span>XL</span>
                            </div>
                            <div className="single__inform__right__buttons">
                                <div className="single__inform__right__buttons__start">
                                    <p>{count}</p>
                                    <div>
                                        <button onClick={() => setCuont(count+1)}>+</button>
                                        <button disabled={count === 1} onClick={() => setCuont(count-1)}>-</button>
                                    </div>
                                </div>
                                <button className="single__inform__right__buttons__btn">
                                    Add To Cart
                                </button>
                                <button className="single__inform__right__buttons__like__btn">
                                    <FaHeart /> 
                                </button>
                                <button className="single__inform__right__buttons__like__btn">
                                    <LuEye />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Single