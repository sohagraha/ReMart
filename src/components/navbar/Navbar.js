import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* <!-- navbar --> */}
            <nav className="w-full bg-gray-800">
                <div className="container flex">
                    <div className="relative flex items-center px-8 py-4 cursor-pointer bg-primary group">
                        <span className="text-white">
                            <FaBars />
                        </span>
                        <span className="ml-2 text-white capitalize">All Category</span>

                        {/* <!-- dropdown --> */}
                        <div
                            className="absolute left-0 invisible py-3 transition duration-300 bg-white divide-y divide-gray-300 shadow-md opacity-0 w-100 top-full divide-dashed group-hover:opacity-100 group-hover:visible">
                            <Link to={"/"} className="flex items-center px-6 py-3 transition hover:bg-gray-100">
                                <img src="assets/images/icons/sofa.svg" alt="sofa" className="object-contain w-5 h-5" />
                                <span className="ml-6 text-sm text-gray-600">Sofa</span>
                            </Link>
                            <Link to={"/"} className="flex items-center px-6 py-3 transition hover:bg-gray-100">
                                <img src="assets/images/icons/terrace.svg" alt="terrace" className="object-contain w-5 h-5" />
                                <span className="ml-6 text-sm text-gray-600">Terarce</span>
                            </Link>
                            <Link to={"/"} className="flex items-center px-6 py-3 transition hover:bg-gray-100">
                                <img src="assets/images/icons/bed.svg" alt="bed" className="object-contain w-5 h-5" />
                                <span className="ml-6 text-sm text-gray-600">Bed</span>
                            </Link>
                            <Link to={"/"} className="flex items-center px-6 py-3 transition hover:bg-gray-100">
                                <img src="assets/images/icons/office.svg" alt="office" className="object-contain w-5 h-5" />
                                <span className="ml-6 text-sm text-gray-600">office</span>
                            </Link>
                            <Link to={"/"} className="flex items-center px-6 py-3 transition hover:bg-gray-100">
                                <img src="assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="object-contain w-5 h-5" />
                                <span className="ml-6 text-sm text-gray-600">Outdoor</span>
                            </Link>
                            <Link to={"/"} className="flex items-center px-6 py-3 transition hover:bg-gray-100">
                                <img src="assets/images/icons/bed-2.svg" alt="Mattress" className="object-contain w-5 h-5" />
                                <span className="ml-6 text-sm text-gray-600">Mattress</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-grow pl-12">
                        <div className="flex items-center space-x-6 capitalize">
                            <Link to={"/"} className="hidden text-gray-200 transition md:blockhover:text-white">Home</Link>
                            <Link to={"/"} className="text-gray-200 transition hover:text-white">Shop</Link>
                            <Link to={"/"} className="hidden text-gray-200 transition md:block hover:text-white">About us</Link>
                            <Link to={"/"} className="hidden text-gray-200 transition md:block hover:text-white">Contact us</Link>
                        </div>
                        <Link to={"/login"} className="hidden text-gray-200 transition md:block hover:text-white">Login</Link>
                    </div>
                </div>
            </nav>
            {/* <!-- ./navbar --> */}
        </>
    );
};

export default Navbar;