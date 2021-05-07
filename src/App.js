import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import {commerce} from './lib/commerce'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  const [products,setProducts] = useState([])
  const [cart,setCart] = useState({})

  const fetchProducts = async () => {
    const {data} = await commerce.products.list()
    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId,quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }

  const handlUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity})
    setCart(cart)
  }
  useEffect(() =>{
    fetchProducts()
    fetchCart()
  },[])

  console.log(cart)

  return (
    <Router>
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Switch>
        <Route exact path='/'>
          <Products products={products} onAddtoCart={handleAddToCart}/>
        </Route>
        <Route exact path='/cart'>
          <Cart cart={cart}/>
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App
