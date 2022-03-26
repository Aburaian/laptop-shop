import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Laptop.css'

const Laptop = ({laptop, AddToCart}) => {
    const {name, picture,price, id}= laptop
    return (
        <div className='laptop'>
             <img src={picture} alt=""></img>
            <div className='laptop-info'>
                <p className='laptop-name'>{name}</p>
                <p className='laptop-price'>Price: ${price}</p>
            </div>
            <button onClick={() => AddToCart(laptop)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Laptop;