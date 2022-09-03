import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsSuitHeart, BsTwitter } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Product1 from "../../assets/images/products/product1.jpg"

const ProductDetails = () => {
    return (
        <>
            <div class="container grid md:grid-cols-2 gap-6">
                <div>
                    <img src={Product1} alt="product" class="w-full" />
                    <div class="grid grid-cols-5 gap-4 mt-4">
                        <img src={Product1} alt="product2"
                            class="w-full cursor-pointer border border-primary" />
                        <img src={Product1} alt="product2" class="w-full cursor-pointer border" />
                        <img src={Product1} alt="product2" class="w-full cursor-pointer border" />
                        <img src={Product1} alt="product2" class="w-full cursor-pointer border" />
                        <img src={Product1} alt="product2" class="w-full cursor-pointer border" />
                    </div>
                </div>

                <div>
                    <h2 class="text-3xl font-medium uppercase mb-2">Italian L Shape Sofa</h2>
                    <div class="flex items-center mb-4">
                        <div class="flex gap-1 text-sm text-yellow-400">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <div class="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                    </div>
                    <div class="space-y-2">
                        <p class="text-gray-800 font-semibold space-x-2">
                            <span>Availability: </span>
                            <span class="text-green-600">In Stock</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-gray-800 font-semibold">Brand: </span>
                            <span class="text-gray-600">Apex</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-gray-800 font-semibold">Category: </span>
                            <span class="text-gray-600">Sofa</span>
                        </p>
                        <p class="space-x-2">
                            <span class="text-gray-800 font-semibold">SKU: </span>
                            <span class="text-gray-600">BE45VGRT</span>
                        </p>
                    </div>
                    <div class="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p class="text-xl text-primary font-semibold">$45.00</p>
                        <p class="text-base text-gray-400 line-through">$55.00</p>
                    </div>

                    <p class="mt-4 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                        reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
                        consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.</p>

                    <div class="pt-4">
                        <h3 class="text-sm text-gray-800 uppercase mb-1">Size</h3>
                        <div class="flex items-center gap-2">
                            <div class="size-selector">
                                <input type="radio" name="size" id="size-xs" class="hidden" />
                                <label for="size-xs"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                            </div>
                            <div class="size-selector">
                                <input type="radio" name="size" id="size-sm" class="hidden" />
                                <label for="size-sm"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                            </div>
                            <div class="size-selector">
                                <input type="radio" name="size" id="size-m" class="hidden" />
                                <label for="size-m"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                            </div>
                            <div class="size-selector">
                                <input type="radio" name="size" id="size-l" class="hidden" />
                                <label for="size-l"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                            </div>
                            <div class="size-selector">
                                <input type="radio" name="size" id="size-xl" class="hidden" />
                                <label for="size-xl"
                                    class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4">
                        <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                        <div class="flex items-center gap-2">
                            <div class="color-selector">
                                <input type="radio" name="color" id="red" class="hidden" />
                                <label for="red"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#fc3d57" }}></label>
                            </div>
                            <div class="color-selector">
                                <input type="radio" name="color" id="black" class="hidden" />
                                <label for="black"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#000" }}></label>
                            </div>
                            <div class="color-selector">
                                <input type="radio" name="color" id="white" class="hidden" />
                                <label for="white"
                                    class="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{ backgroundColor: "#fff" }}></label>
                            </div>

                        </div>
                    </div>

                    <div class="mt-4">
                        <h3 class="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
                        <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                            <div class="h-8 w-8 text-base flex items-center justify-center">4</div>
                            <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                        </div>
                    </div>

                    <div class="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
                        <Link to={"/"}
                            class="bg-primary border border-primary text-white w-full md:w-fit md:px-8 px-3 py-2 font-sm rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                            <BiShoppingBag /> <span>Add to cart</span>
                        </Link>
                        <Link to={"/"}
                            class="border border-gray-300 text-gray-600  px-3 md:px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                            <BsSuitHeart /> Wishlist
                        </Link>
                    </div>

                    <div class="flex gap-3 mt-4">
                        <Link to={"/"}
                            class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <BsFacebook />
                        </Link>
                        <Link to={"/"}
                            class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <BsTwitter />
                        </Link>
                        <Link to={"/"}
                            class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <BsInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;