import orderDetials from '../Products/products'
import './productPage.css'

function ProductPage(props) {
    let prod = orderDetials
  return (
    <div>
        {prod.map((eachProd)=>(
            <div id={eachProd.title} className='product-container'>
                <h2>Title : </h2>{eachProd.title}
                <h2 className='price'>Price : </h2>{eachProd.amount}
                <br></br>
                <input></input>
                <button
                 onClick={()=>props.onProductAdd(eachProd.title,eachProd.amount)}>
                 add to cart
                </button>
            </div>
        ))}
    </div>
  )
}

export default ProductPage