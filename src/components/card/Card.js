import React , {useEffect , useState} from 'react'
import "./card.scss"

import axios from "axios"
import { Link } from 'react-router-dom'
import Skeleton from '../skeleton/Skeleton'
import Loading from '../loading/Loading'

import star from "../../assets/images/str.png"


const API_URL = "https://fakestoreapi.com/products/"

function Card() {
    const [data , setData] = useState([])
    const [count , setCount] = useState(8)
    const [categories , SetCategories] = useState([])
    const [categoryValue , setCategoryValue] = useState("")
    const [loading, setLoading] = useState(false)

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
            <button className='card__like'><svg class="imagess" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
          </svg></button>
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
          { loading && <Skeleton count={10}/> }
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