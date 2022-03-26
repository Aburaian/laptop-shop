import React, { useEffect, useState } from 'react'
import Laptop from '../Laptop/Laptop';
import './LaptopShop.css'


const LaptopShop = () => {
    const [laptops, setLaptops] = useState([])
     const [carts, setCart]= useState([])
    useEffect( () =>{
        fetch('laptop.json')
        .then(res=> res.json())
        .then(data => setLaptops(data))
    }, []);

     const AddToCart = (laptop) =>{
        setCart([...carts, laptop])
     }
    return (
        <div className='shop-container'>
            <div className='laptops-area'>
                {
                    laptops.map(laptop=> <Laptop key={laptop.id}
                        laptop={laptop} AddToCart={AddToCart}></Laptop>)
                }
            </div>
            <div className='info-area'>
                <h3>Select Products</h3>
                {
                    carts.map(cart =>  <p key={cart.id}>{cart.name}</p>)
                }
                <button>Choose 1 for me</button>
            </div>
        </div>
    );
};

export default LaptopShop;