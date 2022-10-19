import React from 'react'

const CartCard = ({item}) => {
  return (
    <div className='cart-card'>
      <img src="https://www.sproutsanfrancisco.com/media/catalog/product/cache/1ab195a2a60689a7a68854e714bba266/y/e/yellow_duck_1.jpg"/>
      {/* <div> */}
        <h4>{item.product.name}</h4>
        <h4>${item.product.price}</h4>
      {/* </div> */}
    </div>
  )
}

export default CartCard