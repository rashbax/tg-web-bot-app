import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import './ProductList.css'




export default function ProductList({name, products}) {



  return (
    <div className='productList' name={name}>
      <div className="productList__title">{name}</div>
      <div className="productList__container">
        {products?.map(product => <ProductItem key={product.id} product={product} />)}
      </div>
    </div>
  )
}
