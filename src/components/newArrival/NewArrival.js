import React from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';
import { BsSuitHeart } from 'react-icons/bs';
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
                    <div className="overflow-hidden bg-white rounded shadow group">
                        <div className="relative">
                            <img src={Product1} alt="New Arrival" class="w-full" />
                            <div
                                className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                                <Link to={"/"}
                                    className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                                    title="View Product">
                                    <AiOutlineEye />
                                </Link>
                                <Link to={"/"}
                                    className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                                    title="add to wishlist">
                                    <BsSuitHeart />
                                </Link>
                            </div>
                        </div>
                        <div className="px-4 pt-4 pb-3">
                            <Link to={"/"}>
                                <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">Guyer
                                    Chair</h4>
                            </Link>
                            <div className="flex flex-row items-baseline mb-1 space-x-2">
                                <p className="flex flex-row items-center text-xl font-semibold text-primary"><TbCurrencyTaka />45.00</p>
                                <p className="flex flex-row items-center text-sm text-gray-400 line-through"><TbCurrencyTaka />55.90</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                </div>
                                <div className="ml-3 text-xs text-gray-500">(150)</div>
                            </div>
                        </div>
                        <Link to={"/"}
                            className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                            to cart</Link>
                    </div>
                    <div className="overflow-hidden bg-white rounded shadow group">
                        <div className="relative">
                            <img src={Product2} alt="New Arrival" class="w-full" />
                            <div
                                className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                                <Link to={"/"}
                                    className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                                    title="View Product">
                                    <AiOutlineEye />
                                </Link>
                                <Link to={"/"}
                                    className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                                    title="add to wishlist">
                                    <BsSuitHeart />
                                </Link>
                            </div>
                        </div>
                        <div className="px-4 pt-4 pb-3">
                            <Link to={"/"}>
                                <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">Bed
                                    King Size</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl font-semibold text-primary">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                </div>
                                <div className="ml-3 text-xs text-gray-500">(150)</div>
                            </div>
                        </div>
                        <Link to={"/"}
                            className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                            to cart</Link>
                    </div>
                    <div className="overflow-hidden bg-white rounded shadow group">
                        <div className="relative">
                            <img src={Product3} alt="New Arrival" class="w-full" />
                            <div
                                className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                                <Link to={"/"}
                                    className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                                    title="View Product">
                                    <AiOutlineEye />
                                </Link>
                                <Link to={"/"}
                                    className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                                    title="add to wishlist">
                                    <BsSuitHeart />
                                </Link>
                            </div>
                        </div>
                        <div className="px-4 pt-4 pb-3">
                            <Link to={"/"}>
                                <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                                    Couple Sofa</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl font-semibold text-primary">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                </div>
                                <div className="ml-3 text-xs text-gray-500">(150)</div>
                            </div>
                        </div>
                        <Link to={"/"}
                            className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                            to cart</Link>
                    </div>
                    <div className="overflow-hidden bg-white rounded shadow group">
                        <div className="relative">
                            <img src={Product4} alt="New Arrival" class="w-full" />
                            <div
                                className="absolute inset-0 flex items-center justify-center gap-2 transition bg-black opacity-0 bg-opacity-40 group-hover:opacity-100">
                                <Link to={"/"}
                                    className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                                    title="View Product">
                                    <AiOutlineEye />
                                </Link>
                                <Link to={"/"}
                                    className="flex items-center justify-center h-8 text-lg text-white transition rounded-full w-9 bg-primary hover:bg-gray-800"
                                    title="add to wishlist">
                                    <BsSuitHeart />
                                </Link>
                            </div>
                        </div>
                        <div className="px-4 pt-4 pb-3">
                            <Link to={"/"}>
                                <h4 className="mb-2 text-xl font-medium text-gray-800 uppercase transition hover:text-primary">
                                    Mattrass X</h4>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2">
                                <p className="text-xl font-semibold text-primary">$45.00</p>
                                <p className="text-sm text-gray-400 line-through">$55.90</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                    <span><i className="fa-solid fa-star"></i></span>
                                </div>
                                <div className="ml-3 text-xs text-gray-500">(150)</div>
                            </div>
                        </div>
                        <Link to={"/"}
                            className="block w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                            to cart</Link>
                    </div>
                </div>
            </div>
            {/* <!-- ./new arrival --> */}
        </>
    );
};

export default NewArrival;