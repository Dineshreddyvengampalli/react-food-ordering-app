import { useState } from 'react'
import orderDetials from '../Products/products'
import './productPage.css'

function ProductPage(props) {
  let [input,setInput] = useState(0)
    let prod = orderDetials
    let inputHandler = (e)=>{
      setInput(e.target.value)
    }
  return (
    <div>
        {prod.map((eachProd)=>(
            <div id={eachProd.title} className='product-container'>
                <h2>Title : </h2>{eachProd.title}
                <h2 className='price'>Price : </h2>{eachProd.amount}
                <br></br>
                <input type='number' onChange={inputHandler}></input>
                <button
                 onClick={()=>props.onProductAdd(eachProd.title,eachProd.amount*input,input)}>
                 add to cart
                </button>
            </div>
        ))}
    </div>
  )
}

export default ProductPage