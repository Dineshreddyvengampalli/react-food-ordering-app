import React from 'react'

function UserCart(props) {
  return (
    <div>
      <button onClick={props.closeHandler}>Close cart</button>
      {props.cartProducts.map((eachProduct)=>(
        <div>{eachProduct}</div>
      ))}
    </div>
  )
}

export default UserCart