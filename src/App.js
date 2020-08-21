import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Cart from './Cart.js'
import './Cart.css'
import './Cart-Item.css'

const items = [
  {id:1, name:'Taco Seasoning', price: 2.25, qty:2},
   {id:2, name:'Pinto Beans', price: 1.99, qty:3},
    {id:3, name:'Sour Cream', price: 3.50, qty:1}
]
const App = () => {
  return (
    <div>
        <Cart initialItems={items} />
    </div>
  )
  
}
ReactDOM.render(

  <App />,
  document.getElementById('root')
);

export default App;