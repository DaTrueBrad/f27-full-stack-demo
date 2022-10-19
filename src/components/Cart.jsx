import React, {useEffect, useState} from 'react'
import axios from 'axios';
import CartCard from './CartCard'
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch()
  const [cart, setCart] = useState([])
  const total = useSelector(state => state.total)

  const handleCheckout = () => {
    alert("Your total is: $" + total + ". Thank you for shopping with us!")
    axios
      .delete("http://localhost:4000/cart")
      .then((res) => {
        setCart([])
        dispatch({type: "GETTOTAL", payload: []})
        alert("Cart has been cleared")
      })
  }

  useEffect(() => {
    axios.get("http://localhost:4000/cart").then((res) => {
      setCart(res.data);
      console.log(res.data);
      dispatch({type: "GETTOTAL", payload: res.data})
    });
  }, []);
  
  return (
    <div>
      <h1>My Cart</h1>
      {cart.map((item) => {
        return <CartCard item={item} />
      })}
      <h3>Total: ${total}</h3>
      <button onClick={handleCheckout}>Continue to Checkout</button>
    </div>
  )
}

export default Cart