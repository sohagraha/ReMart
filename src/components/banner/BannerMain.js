import React from 'react';
import { Link } from 'react-router-dom';

const BannerMain = () => {
    return (
        <div className='container'>
            {/* <!-- banner --> */}
            <div class="bg-center bg-no-repeat bg-cover py-36 w-full" style={{
                backgroundImage: `url("https://lswordpress.s3.amazonaws.com/blog/wp-content/uploads/2021/07/27133849/Returns-Blog-New-Header-850-x-500-px.png")`
            }}>
                <div class="container">
                    <h1 class="mb-4 text-6xl font-medium text-gray-800 capitalize">
                        best collection for <br /> home decoration
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br />
                        accusantium perspiciatis, sapiente
                        magni eos dolorum ex quos dolores odio</p>
                    <div class="mt-12">
                        <Link to={"/shop"} class="px-8 py-3 font-medium text-white border rounded-md bg-primary border-primary hover:bg-transparent hover:text-primary">Shop Now</Link>
                    </div>
                </div>
            </div>
            {/* <!-- ./banner --> */}
        </div>
    );
};

export default BannerMain;