import React, { useEffect, useState } from 'react';

const LaptopShop = () => {
    const [laptops, setLaptops] = useState([])
    useEffect( () =>{
        fetch('laptop.json')
        .then(res=> res.json())
        .then(data => setLaptops(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className='laptops-area'>
                {
                    laptops.map(laptop => <li>{laptop.name}</li>)
                }
            </div>
            <div className='laptop-info'>

            </div>
        </div>
    );
};

export default LaptopShop;