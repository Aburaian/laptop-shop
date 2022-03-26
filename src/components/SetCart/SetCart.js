import React from 'react';
import './SetCart.css'

const SetCart = ({carts,laptop,suggestProduct, suggest, removeCart, id}) => {
    return (
        <div>
            <div>
            {
                   
                carts.map(cart => <div key={cart.id} className='products'>
                    <img className='product-img' src={cart.picture} alt="" />
                    <p key={cart.id}>{cart.name}</p>
                </div>)
            }
            {
              suggest.map(product => <div key={product[Math.floor(Math.random() * laptop.length)].id} className='products'>
                    <img className='product-img' src={product[Math.floor(Math.random() * laptop.length)].picture} alt="" />
              <p>{product[Math.floor(Math.random() * laptop.length)].name}</p> </div>)  
            }
            </div>
            <button className='btn-product' onClick={() => suggestProduct(laptop)}>choose 1 for me</button>
            <button className='btn-product' onClick={() => removeCart()}>choose again</button>
        </div>
        
    );
};

export default SetCart;