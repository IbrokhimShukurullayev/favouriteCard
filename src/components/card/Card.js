import React , {useEffect , useState} from 'react'
import "./card.scss"

import axios from "axios"
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'
import Loading from '../loading/Loading'

import { useDispatch , useSelector } from 'react-redux'
import { toogleWishes } from '../../context/wishestSlice'

import star from "../../assets/images/str.png"

import { FaRegHeart , FaHeart } from "react-icons/fa";


const API_URL = "https://fakestoreapi.com/products/"

function Card() {
    const dispatch = useDispatch()
    const [data , setData] = useState([])
    const [count , setCount] = useState(8)
    const [categories , SetCategories] = useState([])
    const [categoryValue , setCategoryValue] = useState("")
    const [loading, setLoading] = useState(false)

    const wishes = useSelector(state => state.wishlist.value)

useEffect(()=> {
        axios
        .get(`${API_URL}/categories`)
        .then(res => SetCategories(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(()=> {
      setLoading(true)
      let url = categoryValue === "" ? `${API_URL}?limit=${count}` : `${API_URL}/category/${categoryValue}?limit=${count}`
        axios
        .get(url)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [count ,categoryValue])

    const getCategory = (text)=>{
      setCategoryValue(text)
      setData([])
    }

    let products = data?.map(el=> (
        <div key={el.id} className="card">
            <div className="card__img">
                <Link to={`/single/${el.id}`}><img title={el.description} src={el.image} alt="" /></Link>
            </div>
            <button onClick={() => dispatch(toogleWishes(el))} className='card__like'>
                {
                    wishes.some(w => w.id === el.id) ? <FaHeart/> :
                <FaRegHeart/> 
                }
            </button>
            <div className="card__body">
                <h2 title={el.title} className="card__title">
                    {el.title}
                </h2>
                
                <div className="card__prices">
                    <h3>${el.price}</h3>
                    <img src={star} alt="" />
                    <h4>({el.rating.rate})</h4>
                </div>
            </div>
        </div>
    ))

    let categoriesItem = categories?.map((el , inx) => <li onClick={e => getCategory(e.target.innerHTML)} className='filter__item' key={inx} >{el}</li>)
    return (
    <section>
        <div className="container">
          <div className="filter">
            <h2 className="filter__title">
             Explore Our Products
            </h2>
            <ul className="filter__list">
              <li onClick={()=> getCategory("")} className='filter__item items'>All</li>
              {categoriesItem}
            </ul>
          </div>
          { loading && <Skeleton count={8}/> }
          { loading && <Loading count={4}/> }
          <div className="row">
            {products}
          </div>
            <button onClick={()=>setCount(p => p + 4)} className='card__buttons'>View All Products</button>
        </div>
      </section>
  )
}

export default Card