import './App.css';
import ProductPage from './Components/ProductsPage/ProductPage';
import UserCart from './Components/Cart/UserCart';
import { useState } from 'react';

function App() {
  let [products,setProducts] = useState([])
  let [cartDisplay,setCartDisplay] = useState(false)
  let [productDisplay,setProductDisplay] = useState(true)

  let cartHandler = (e)=>{
    setCartDisplay(true)
    setProductDisplay(false)
  }
  let closeHandler = ()=>{
    setCartDisplay(false)
    setProductDisplay(true)
  }
  let onProductAdd = (productList,amount,quantity)=>{
    setProducts((prevProduct)=>{
      return [...prevProduct,{'item':productList,'totalAmount':amount,'quantity':quantity}]
    })
  }
  return (
    <div className="App">
      <button onClick={cartHandler}>Show Cart</button>
      { productDisplay && <ProductPage onProductAdd = {onProductAdd} ></ProductPage>}
      { cartDisplay && <UserCart closeHandler = {closeHandler} cartProducts = {products}></UserCart>}
    </div>
  );
}

export default App;
