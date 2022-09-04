import React from 'react';

const ShopFilter = () => {
    return (
        <>
            <div className="hidden md:block col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
                <div className="divide-y divide-gray-200 space-y-5">
                    <div>
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input type="checkbox" name="cat-1" id="cat-1"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="cat-1" className="text-gray-600 ml-3 cusror-pointer">Bedroom</label>
                                <div className="ml-auto text-gray-600 text-sm">(15)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="cat-2" id="cat-2"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="cat-2" className="text-gray-600 ml-3 cusror-pointer">Sofa</label>
                                <div className="ml-auto text-gray-600 text-sm">(9)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="cat-3" id="cat-3"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="cat-3" className="text-gray-600 ml-3 cusror-pointer">Office</label>
                                <div className="ml-auto text-gray-600 text-sm">(21)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="cat-4" id="cat-4"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="cat-4" className="text-gray-600 ml-3 cusror-pointer">Outdoor</label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-1" id="brand-1"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="brand-1" className="text-gray-600 ml-3 cusror-pointer">Cooking Color</label>
                                <div className="ml-auto text-gray-600 text-sm">(15)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-2" id="brand-2"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="brand-2" className="text-gray-600 ml-3 cusror-pointer">Magniflex</label>
                                <div className="ml-auto text-gray-600 text-sm">(9)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-3" id="brand-3"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="brand-3" className="text-gray-600 ml-3 cusror-pointer">Ashley</label>
                                <div className="ml-auto text-gray-600 text-sm">(21)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-4" id="brand-4"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="brand-4" className="text-gray-600 ml-3 cusror-pointer">M&D</label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-5" id="brand-5"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="brand-5" className="text-gray-600 ml-3 cusror-pointer">Olympic</label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                        <div className="mt-4 flex items-center">
                            <input type="text" name="min" id="min"
                                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="min" />
                            <span className="mx-3 text-gray-500">-</span>
                            <input type="text" name="max" id="max"
                                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="max" />
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector flex flex-col items-center gap-1">
                                <input type="radio" name="size" id="size-xs" className="block" />
                                <label for="size-xs"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                            </div>
                            <div className="size-selector flex flex-col items-center gap-1">
                                <input type="radio" name="size" id="size-sm" className="block" />
                                <label for="size-sm"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                            </div>
                            <div className="size-selector flex flex-col items-center gap-1">
                                <input type="radio" name="size" id="size-m" className="block" />
                                <label for="size-m"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                            </div>
                            <div className="size-selector flex flex-col items-center gap-1">
                                <input type="radio" name="size" id="size-l" className="block" />
                                <label for="size-l"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                            </div>
                            <div className="size-selector flex flex-col items-center gap-1">
                                <input type="radio" name="size" id="size-xl" className="block" />
                                <label for="size-xl"
                                    className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                        <div className="flex items-center gap-2">
                            <div className="color-selector flex flex-col items-center gap-1">
                                <input type="radio" name="color" id="red" className="block" />
                                <label for="red"
                                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{
                                        backgroundColor: '#fc3d57'
                                    }}></label>
                            </div>
                            <div className="color-selector flex flex-col items-center gap-1">
                                <input type="radio" name="color" id="black" className="block" />
                                <label for="black"
                                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{
                                        backgroundColor: '#000'
                                    }}></label>
                            </div>
                            <div className="color-selector flex flex-col items-center gap-1">
                                <input type="radio" name="color" id="white" className="block" />
                                <label for="white"
                                    className="border border-gray-200 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                    style={{
                                        backgroundColor: '#fff'
                                    }}></label>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ShopFilter;