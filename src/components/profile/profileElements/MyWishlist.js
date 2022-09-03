import React from 'react';
import { Link } from 'react-router-dom';
import Product5 from '../../../assets/images/products/product5.jpg';
import Product6 from '../../../assets/images/products/product6.jpg';
import Product7 from '../../../assets/images/products/product7.jpg';
import { MdDelete } from 'react-icons/md';

const MyWishlist = () => {
    return (
        <>
            {/* <!-- wishlist --> */}
            <div className="col-span-12 space-y-4 md:col-span-9">
                <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                    <div className="w-28">
                        <img src={Product6} alt="product 6" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-xl font-medium text-gray-800 uppercase">Italian L shape</h2>
                        <p className="text-sm text-gray-500">Availability: <span className="text-green-600">In Stock</span></p>
                    </div>
                    <div className="text-lg font-semibold text-primary">$320.00</div>
                    <Link to={"/"}
                        className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto">add
                        to cart</Link>

                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <MdDelete />
                    </div>
                </div>

                <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                    <div className="w-28">
                        <img src={Product5} alt="product 5" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-xl font-medium text-gray-800 uppercase">Dining Table</h2>
                        <p className="text-sm text-gray-500">Availability: <span className="text-green-600">In Stock</span></p>
                    </div>
                    <div className="text-lg font-semibold text-primary">$320.00</div>
                    <Link to={"/"}
                        className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition border rounded bg-primary border-primary hover:bg-transparent hover:text-primary font-roboto">add
                        to cart</Link>

                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <MdDelete />
                    </div>
                </div>

                <div className="flex items-center justify-between gap-6 p-4 border border-gray-200 rounded">
                    <div className="w-28">
                        <img src={Product7} alt="product 7" className="w-full" />
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-xl font-medium text-gray-800 uppercase">Sofa</h2>
                        <p className="text-sm text-gray-500">Availability: <span className="text-red-600">Out of Stock</span></p>
                    </div>
                    <div className="text-lg font-semibold text-primary">$320.00</div>
                    <Link to={"/"}
                        className="px-6 py-2 text-sm font-medium text-center text-white uppercase transition bg-red-400 border border-red-400 rounded cursor-not-allowed font-roboto">add
                        to cart</Link>

                    <div className="text-gray-600 cursor-pointer hover:text-primary">
                        <MdDelete />
                    </div>
                </div>
            </div>
            {/* <!-- ./wishlist --> */}
        </>
    );
};

export default MyWishlist;