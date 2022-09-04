import React from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';
import { BsSuitHeart } from 'react-icons/bs';
const ProductCard = ({ img }) => {
    return (
        <>
            <div className="overflow-hidden bg-white rounded shadow group transform duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <div className="relative">
                    <img src={img} alt="New Arrival" class="w-full" />
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
                        <h4 className="mb-1 h-11 md:h-14 text-sm md:text-lg font-medium line-clamp-2 overflow-ellipsis text-gray-800 uppercase transition hover:text-primary">Guyer
                            Leather
                            Chair gasd gafsd gyfasd fgasfd ug gsdgs gahsd asgd asd asvd gasd  asgfdg sd gfasdg  </h4>
                    </Link>
                </div>
                <div className="">
                    <div className="flex flex-row items-baseline mb-1 space-x-2 mx-3">
                        <p className="flex flex-row items-center text-sm md:text-xl font-semibold text-primary"><TbCurrencyTaka />45.00</p>
                        <p className="flex flex-row items-center text-xs md:text-sm text-gray-400 line-through"><TbCurrencyTaka />55.90</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                        </div>
                        <div className="ml-3 text-xs text-gray-500">(150)</div>
                    </div>
                    <Link to={"/"}
                        className="block  w-full py-1 text-center text-white transition border rounded-b bg-primary border-primary hover:bg-transparent hover:text-primary">Add
                        to cart</Link>
                    <div class="sale absolute top-3 right-2 px-3 font-semibold bg-red-600 text-white uppercase">25% Off</div>
                    <div class="sale absolute top-3 left-2 px-3 font-semibold bg-red-600 text-white uppercase">Popular</div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;