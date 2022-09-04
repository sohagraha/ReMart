import React from 'react';
import { Link } from 'react-router-dom';
import Cat1 from '../../assets/images/category/category-1.jpg';
import Cat2 from '../../assets/images/category/category-2.jpg';
import Cat3 from '../../assets/images/category/category-3.jpg';
import Cat4 from '../../assets/images/category/category-4.jpg';
import Cat5 from '../../assets/images/category/category-5.jpg';
import Cat6 from '../../assets/images/category/category-6.jpg';

const Category = () => {
    return (
        <>
            {/* <!-- categories --> */}
            <div class="container pb-12">
                <h2 class="mb-6 text-2xl font-medium text-gray-800 uppercase">shop by category</h2>
                <div class="grid grid-col-12  md:grid-cols-3 gap-3">
                    <div class="relative overflow-hidden rounded-sm group shadow group transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <img src={Cat1} alt="category 1" class="w-full" />
                        <Link to="/shop"
                            class="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Bedroom</Link>
                    </div>
                    <div class="relative overflow-hidden rounded-sm group shadow group transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <img src={Cat2} alt="category 2" class="w-full" />
                        <Link to="/shop"
                            class="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Mattrass</Link>
                    </div>
                    <div class="relative overflow-hidden rounded-sm group shadow group transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <img src={Cat3} alt="category 3" class="w-full" />
                        <Link to="/shop"
                            class="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Outdoor
                        </Link>
                    </div>
                    <div class="relative overflow-hidden rounded-sm group shadow group transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <img src={Cat4} alt="category 4" class="w-full" />
                        <Link to="/shop"
                            class="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Sofa</Link>
                    </div>
                    <div class="relative overflow-hidden rounded-sm group shadow group transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <img src={Cat5} alt="category 5" class="w-full" />
                        <Link to="/shop"
                            class="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Living
                            Room</Link>
                    </div>
                    <div class="relative overflow-hidden rounded-sm group shadow group transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                        <img src={Cat6} alt="category 6" class="w-full" />
                        <Link to="/shop"
                            class="absolute inset-0 flex items-center justify-center text-xl font-medium text-white transition bg-black bg-opacity-40 font-roboto group-hover:bg-opacity-60">Kitchen</Link>
                    </div>
                </div>
            </div>
            {/* <!-- ./categories --> */}
        </>
    );
};

export default Category;