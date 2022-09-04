import React from 'react';
import ProductCard from '../productCard/ProductCard';
import Product1 from '../../assets/images/products/product1.jpg';

const ShopProducts = () => {

    return (
        <>
            {/* <!-- products --> */}
            <div className="col-span-4 md:col-span-3">
                <div className="flex items-center mb-4">
                    <div
                        className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                        <i className="fa-solid fa-grip-vertical"></i>
                    </div>
                    <select name="sort" id="sort"
                        className="w-40 text-sm text-gray-600 py-2 px-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">

                        <option value="">Default sorting</option>
                        <option value="price-low-to-high">Price low to high</option>
                        <option value="price-high-to-low">Price high to low</option>
                        <option value="latest">Latest product</option>
                    </select>

                    <div className="flex gap-2 ml-auto">
                        <div
                            className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                            <i className="fa-solid fa-grip-vertical"></i>
                        </div>
                        <div
                            className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                            <i className="fa-solid fa-list"></i>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <ProductCard img={Product1} name="ghdsgfh" />
                    <ProductCard img={Product1} name="ghdsgfh" />
                    <ProductCard img={Product1} name="ghdsgfh" />
                    <ProductCard img={Product1} name="ghdsgfh" />
                    <ProductCard img={Product1} name="ghdsgfh" />
                    <ProductCard img={Product1} name="ghdsgfh" />
                    <ProductCard img={Product1} name="ghdsgfh" />
                </div>
            </div>
            {/* <!-- ./products --> */}


        </>
    );
};

export default ShopProducts;