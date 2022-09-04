import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';

const Footer = () => {
    return (
        <>
            {/* <!-- footer --> */}
            <footer className="pt-16 pb-12 bg-white border-t border-gray-100">
                <div className="container grid grid-cols-3">
                    <div className="col-span-1 space-y-8">
                        {/* <img src="assets/images/logo.svg" > */}
                        <img src={Logo} alt="logo" className="w-30" />
                        <div className="mr-2">
                            <p className="text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <Link to={"/"} className="text-gray-400 hover:text-gray-500"><i
                                className="fa-brands fa-facebook-square"></i></Link>
                            <Link to={"/"} className="text-gray-400 hover:text-gray-500"><i
                                className="fa-brands fa-instagram-square"></i></Link>
                            <Link to={"/"} className="text-gray-400 hover:text-gray-500"><i
                                className="fa-brands fa-twitter-square"></i></Link>
                            <Link to={"/"} className="text-gray-400 hover:text-gray-500">
                                <i className="fa-brands fa-github-square"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-8">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Solutions</h3>
                                <div className="mt-4 space-y-4">
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Marketing</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Analitycs</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Commerce</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Insights</Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Support</h3>
                                <div className="mt-4 space-y-4">
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Pricing</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Documentation</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Guides</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">API Status</Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Solutions</h3>
                                <div className="mt-4 space-y-4">
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Marketing</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Analitycs</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Commerce</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Insights</Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">Support</h3>
                                <div className="mt-4 space-y-4">
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Pricing</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Documentation</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">Guides</Link>
                                    <Link to={"/"} className="block text-base text-gray-500 hover:text-gray-900">API Status</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- ./footer --> */}
        </>
    );
};

export default Footer;