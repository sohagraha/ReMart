import React from 'react';
import ProductCard from '../productCard/ProductCard';
import Product1 from '../../assets/images/products/product1.jpg';
import Product2 from '../../assets/images/products/product2.jpg';
import Product3 from '../../assets/images/products/product3.jpg';
import Product4 from '../../assets/images/products/product4.jpg';


const NewArrival = () => {
    return (
        <>
            {/* <!-- new arrival --> */}
            <div className="container pb-16">
                <h2 className="mb-6 text-2xl font-medium text-gray-800 uppercase">top new arrival</h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    <ProductCard img={Product1} name="ghdsgfh" />
                    <ProductCard img={Product2} />
                    <ProductCard img={Product3} />
                    <ProductCard img={Product4} />
                </div>
            </div>
            {/* <!-- ./new arrival --> */}
        </>
    );
};

export default NewArrival;