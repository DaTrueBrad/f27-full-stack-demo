import axios from 'axios'
import React from 'react'

const ProductCard = ({product}) => {
  const handleClick = () => {
    axios
    .post(`http://localhost:4000/cart`, {id: product.id})
    .then((res) => {
      console.log("success")
    })
  }

  return (
    <div className='product-card'>
      <img src="https://www.sproutsanfrancisco.com/media/catalog/product/cache/1ab195a2a60689a7a68854e714bba266/y/e/yellow_duck_1.jpg"/>
      <div>
        <h4>{product.name}</h4> 
        <h4>{product.price}</h4> 
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}

export default ProductCard