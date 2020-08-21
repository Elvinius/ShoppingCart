import React, {useState, useEffect} from 'react'
import CartItem from './CartItem'


function Cart({initialItems}) {
  const initialState = JSON.parse(window.localStorage.getItem('items'
  ));
  const [items, setItems] = useState(initialState || initialItems);
  useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  const updateQty = (id, newQty) => {
    const newItems=items.map(item => {
      if(item.id === id) {
        return {...item, qty: newQty}
      }
      return item
    })
    setItems(newItems);
  }
  const grandTotal = items.reduce((acc,item) => (acc + item.qty * item.price), 0).toFixed(2)
  return (
    <div className="Cart">
    <h1 className="Cart-title">Shopping Cart</h1>
      <div className="Cart-items">
      {items.map(item => 
        <CartItem key={item.id} {...item} updateQty={updateQty}/>)
      }
      </div>
      <h3 className="Cart-total">Grand Total: ${grandTotal} </h3>
    </div>
  )
  
}

export default Cart;

