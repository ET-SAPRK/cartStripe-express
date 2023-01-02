import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { productsArray } from '../productStore'
import ProductCart from '../component/ProductCart'

const Store = () => {
  return (
    <>
    <h1 align='center' className='p-3'>Welcome to store</h1>
      <Row xs={1} md={3} className='g-4'>
        {productsArray.map((product, index) => {
           return (
              <ProductCart product={product} />
           )
        })}
      </Row>
    </>
  )
}

export default Store