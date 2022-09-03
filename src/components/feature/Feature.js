import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb'
import { GiTakeMyMoney } from 'react-icons/gi'
import { MdSupportAgent } from 'react-icons/md'

const Feature = () => {
    return (
        <>
            {/* <!-- features --> */}
            <div class="container py-16">
                <div class="grid justify-center w-10/12 grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
                    <div class="flex items-center justify-center gap-5 px-3 py-6 border rounded-sm border-primary">
                        <TbTruckDelivery class="object-contain w-12 h-12" alt="Delivery" />
                        <div>
                            <h4 class="text-lg font-medium capitalize">Free Shipping</h4>
                            <p class="text-sm text-gray-500">Order over $200</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-5 px-3 py-6 border rounded-sm border-primary">
                        <GiTakeMyMoney class="object-contain w-12 h-12" alt="Money Return" />
                        <div>
                            <h4 class="text-lg font-medium capitalize">Money Rturns</h4>
                            <p class="text-sm text-gray-500">30 days money returs</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-5 px-3 py-6 border rounded-sm border-primary">
                        <MdSupportAgent class="object-contain w-12 h-12" alt="Support" />
                        <div>
                            <h4 class="text-lg font-medium capitalize">24/7 Support</h4>
                            <p class="text-sm text-gray-500">Customer support</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ./features --> */}
        </>
    );
};

export default Feature;