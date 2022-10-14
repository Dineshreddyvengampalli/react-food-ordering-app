function UserCart(props) {
  let products = props.cartProducts
  let totalPrice = products.map((eachProduct)=>{
    let price = 0
    let tPrice = price + eachProduct.totalAmount
    return tPrice
  })

  return (
    <div>
      <button onClick={props.closeHandler}>Close cart</button>
      {props.cartProducts.map((eachProduct)=>(
        <div>
          {eachProduct.item}
          {eachProduct.totalAmount}
          <h6>Quantity</h6>{eachProduct.quantity}
        </div>
      ))}
      <div>
        <h5>Total cart value : {totalPrice}</h5>
      </div>
    </div>
  )
}

export default UserCart