import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Shop = () => {
  let loc= useLocation()
  return (
    <div>
      <ul>
        <li><Link to='/shop/last-products'>Last Products</Link></li>
      </ul>
      <h2>Shop</h2>
      <Outlet/>
    </div>

  )
}

export default Shop