import React from 'react'
import { CartContext } from './CartContext'
import { useContext } from 'react'
import { getProductData } from './productStore'
import { Button } from 'react-bootstrap'

const CartProduct = (props) => {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity= props.quantity
    const productData = getProductData(id)

  return (
    <>
        <h3>{productData.title}</h3>
        <p>{quantity}</p>
        <p>${ (quantity * productData.Price).toFixed(2) }</p>
        <Button size='sm' onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        <hr></hr>
    </>
  )
}

export default CartProduct