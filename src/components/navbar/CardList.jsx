import React from 'react'

export default function CardList() {
  return (
    <div>
        <div>
        <h1>Your order</h1>
        <button>Clear</button>
        </div>
        <p>Empty</p>
        <div className='order-section'>
        <h3>Order amount :</h3>
        <h3> 0 c</h3>
        </div>
        <p>Delivery is performed by services</p>
        <p>
            <a href='https://www.yemeksepeti.com/'>Yemek sepeti</a>
            <a href='https://getir.com/'> Getir </a>
        </p>
    </div>
  )
}
