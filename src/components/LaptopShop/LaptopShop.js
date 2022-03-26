import React, { useEffect, useState } from 'react'
import Laptop from '../Laptop/Laptop';
import SetCart from '../SetCart/SetCart';
import './LaptopShop.css'


const LaptopShop = () => {
    const [laptops, setLaptops] = useState([])
     const [carts, setCart]= useState([])
    useEffect( () =>{
        fetch('laptop.json')
        .then(res=> res.json())
        .then(data => setLaptops(data))
    }, []);

     const handleAddToCart = (laptop) =>{
        setCart([...carts, laptop])
     }
     const [suggest, setSuggest] = useState([])
     const suggestProduct  = (laptops)=> {
       setSuggest([laptops])
     }

     const removeCart = () => {
         setCart([])
         setSuggest([])

     }
    return (
        <div className='shop-container'>
            <div className='laptops-area'>
                {
                    laptops.map(laptop=> <Laptop key={laptop.id}
                        laptop={laptop} handleAddToCart={handleAddToCart}></Laptop>)
                }
            </div>
            <div className='info-area'>
                <h3>Select Products</h3>
                <SetCart carts={carts} laptop={laptops} suggestProduct={suggestProduct} suggest={suggest} removeCart={removeCart}></SetCart>
            </div>
        </div>
    );
};

export default LaptopShop;