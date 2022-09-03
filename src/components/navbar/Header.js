import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUserAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            {/* <!-- header --> */}
            <header className="w-full py-4 bg-white shadow-sm">
                <div className="container flex items-center justify-between">
                    <Link to={"/"}>
                        <img src={Logo} alt="" />
                    </Link>

                    <div className="flex w-full max-w-xl mx-2">

                        <input type="text" name="search" id="search"
                            className="w-full py-3 pr-3 border border-r-0 border-primary rounded-l-md focus:outline-none"
                            placeholder="search" />
                        <button
                            className="hidden px-2 text-white transition border md:block bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary">Search</button>
                        <button
                            className="px-2 text-white transition border md:hidden bg-primary border-primary rounded-r-md hover:bg-transparent hover:text-primary"><FaSearch /></button>
                    </div>

                    <div className="flex items-center justify-center space-x-4">
                        <Link to={"/"} className="relative hidden text-center text-gray-700 transition hover:text-primary md:block">
                            <div className="text-2xl">
                                <FaHeart />
                            </div>
                            <div className="text-xs leading-3">Wishlist</div>
                            <div
                                className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-1 bg-primary">
                                8</div>
                        </Link>
                        <Link to={"/"} className="relative text-center text-gray-700 transition hover:text-primary">
                            <div className="text-2xl">
                                <FaShoppingCart />
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <div
                                className="absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -right-3 -top-1 bg-primary">
                                2</div>
                        </Link>
                        <Link to={"/profile"} className="flex flex-col items-center justify-center text-center text-gray-700 transition hover:text-primary">
                            <div className="text-2xl">
                                <FaUserAlt className='flex justify-center' />
                            </div>
                            <div className="text-xs leading-3">Account</div>
                        </Link>
                    </div>
                </div>
            </header>
            {/* <!-- ./header --> */}
        </>
    );
};

export default Header;