import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useProducts from '@/hooks/useProducts'
import NavbarTwo from '@/shared/NavbarTwo';

import { GrLocation } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import Rating from 'react-rating';

interface Product {
  title: string;
  description: string;
  rating: number;
  brand: string;
  price: number;
  // Add other properties as needed
}

const ProductsDetails: React.FC = () => {
  const { title } = useParams<{ title: string }>(); // Ensure title is string
  const [product, setProduct] = useState<Product | null>(null); // Provide type for product

  const [products] = useProducts();

  useEffect(() => {
    if (products && Array.isArray(products)) {
      const findProduct = products.find(pro => pro.title === title);
      if (findProduct) {
        setProduct(findProduct);
      }
    }
  }, [title, products]);
  

  console.log(product); // Ensure to remove in production

  const { img, title: productTitle, description, rating, brand, price } = product || {};


  return (
    <div>
      <NavbarTwo />
      <div className='mx-auto md:w-5/6 md:h-5/6 px-5 md:px-0 mt-32'>
        {product ? (
          <>
            <div className="pt-8 md:pt-6 lg:pt-8 flex items-center gap-3">
                        <Link to={'/'}>
                            <h6>Home</h6>
                        </Link>
                        <p>
                            <FaAngleRight></FaAngleRight>
                        </p>
                        <h6>Product Details</h6>
                        <p>
                            <FaAngleRight></FaAngleRight>
                        </p>
                        <h6>{productTitle}</h6>
                    </div>
                    {/* large */}
                    <div className="xl:pt-8 hidden md:hidden xl:block">
                        <div className="grid lg:grid-cols-4 gap-6 bg-white">
                            <div className="keen-slider xl:max-w-sm lg:col-span-1 py-10 px-0 xl:px-10">
                                <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center py-10 rounded-md overflow-hidden">
                                                <div className="hover:scale-110 duration-1000 transition-all ">
                                                    <img className="w-full h-[230px]" src={img} alt="" />
                                                </div>
                                            </div>

                            </div>
                            <div className="lg:col-span-2 space-y-3 py-10">
                                <div>
                                    <h2 className="text-2xl">{productTitle}</h2>
                                    <div className="flex items-center gap-2 text-base py-2">
                                        <h4 className="text-xs font-semibold text-[#FFD100]">
                                            <Rating
                                                emptySymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="h-4 w-full"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>}
                                                fullSymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-4 w-full"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>}
                                                initialRating={rating}
                                                readonly
                                            />
                                        </h4>
                                        <p>{rating ? rating + ' ' + 'Rating' : ''}</p>
                                    </div>
                                </div>
                                <div className="pb-6">
                                    <div className="text-sm flex items-center">
                                        <p className="line-through">{price}</p>
                                        <p>-{price}%</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 lg:w-9/12 xl:w-7/12 pt-4">
                                    <button className="bg-[#3fa9fb] hover:bg-[#4795d1] xl:py-3 lg:px-5 text-white lg:text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                    <button className="bg-[#6B3FFB] hover:bg-[#603ecd] xl:py-3 lg:px-5 text-white lg:text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                </div>
                            </div>
                            {
                                product ? <div className="lg:col-span-1 bg-[#FAFAFA] py-10">
                                    <div className="px-10">
                                        <p className="text-sm font-semibold text-gray-500 pb-3">Delivery</p>
                                        <div className="flex items-center gap-2 text-sm py-2">
                                            <p className="text-xl">
                                                <GrLocation />
                                            </p>
                                            <h5>Dhaka, Bangladesh</h5>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm py-2">
                                            <p className="text-2xl">
                                                <TbTruckDelivery />
                                            </p>
                                            <div className="flex items-center gap-7">
                                                <h5><span className="font-semibold">Standard Delivery</span> 5 - 10 day</h5>
                                                <h4>$<span className="font-semibold">99</span></h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-2">
                                            <p className="text-xl">
                                                <BsCashCoin />
                                            </p>
                                            <h5>Cash on Delivery available</h5>
                                        </div>
                                    </div>
                                    <div className="divider py-1"></div>
                                    <div className="px-10">
                                        <p className="text-sm font-semibold text-gray-500 pb-3">Service</p>
                                        <div className="flex items-center gap-2 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <MdVerified />
                                            </p>
                                            <h5>
                                                100% Authentic from Trusted Brand</h5>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-xl">
                                                <FaCircleArrowLeft />
                                            </p>
                                            <h5>14 days free & easy return</h5>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <HiMiniShieldCheck />
                                            </p>
                                            <h5>1 Year Seller Warranty</h5>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                    {/* md  */}
                    <div className="pt-5 hidden md:block xl:hidden w-full">
                        <div className="grid grid-cols-1 md:grid-cols-4 bg-white w-full">
                            <div className="col-span-1">
                                <div className="keen-slider pt-8 pb-2">
                                <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center  py-10 rounded-md overflow-hidden">
                                                    <div className="hover:scale-110 duration-1000 transition-all ">
                                                        <img className="w-full h-[140px]" src={img} alt="" />
                                                    </div>
                                                </div>

                                </div>
                                <div className=" space-y-1">
                                    <h2 className="text-xl md:text-xl">{productTitle}</h2>
                                    <div className="flex items-center gap-2 text-base py-1">
                                        <h4 className="text-xs font-semibold text-[#FFD100]">
                                            <Rating
                                                emptySymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="h-4 w-full"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                    />
                                                </svg>}
                                                fullSymbol={<svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-4 w-full"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>}
                                                initialRating={rating}
                                                readonly
                                            />
                                        </h4>
                                        <p>{rating ? rating + ' ' + 'Rating' : ''}</p>
                                    </div>
                                    <div className="pb-3">
                                        <div className="text-sm flex items-center">
                                            <p className="line-through">{price}</p>
                                            <p>-{price}%</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 pt-2 pb-8">
                                        <button className="bg-[#3fa9fb] hover:bg-[#4795d1] py-2 px-2 md:py-2 md:px-2 text-white text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                        <button className="bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-1.5 md:py-2 md:px-2 text-white text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                            {
                                product ? <div className="col-span-3 bg-[#FAFAFA] py-10">
                                    <div className="px-6">
                                        <p className="text-sm font-semibold text-gray-500 pb-6">Delivery</p>
                                        <div className="flex items-center gap-2 text-sm py-4">
                                            <p className="text-xl">
                                                <GrLocation />
                                            </p>
                                            <h5>Dhaka, Bangladesh</h5>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm py-4">
                                            <p className="text-2xl">
                                                <TbTruckDelivery />
                                            </p>
                                            <div className="flex items-center gap-7">
                                                <h5><span className="font-semibold">Standard Delivery</span> 5 - 10 day</h5>
                                                <h4>$<span className="font-semibold">99</span></h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-4">
                                            <p className="text-xl">
                                                <BsCashCoin />
                                            </p>
                                            <h5>Cash on Delivery available</h5>
                                        </div>
                                    </div>
                                    <div className="divider py-1"></div>
                                    <div className="px-6">
                                        <p className="text-sm font-semibold text-gray-500 pb-6">Service</p>
                                        <div className="flex items-center gap-2 text-sm py-4 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <MdVerified />
                                            </p>
                                            <h5>
                                                100% Authentic from Trusted Brand</h5>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm py-4 text-[#4B6FFF]">
                                            <p className="text-xl">
                                                <FaCircleArrowLeft />
                                            </p>
                                            <h5>14 days free & easy return</h5>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-4 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <HiMiniShieldCheck />
                                            </p>
                                            <h5>1 Year Seller Warranty</h5>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    ''
                            }

                        </div>
                    </div>
                    {/* mobile+  */}
                    <div className="pt-6 block md:hidden xl:hidden w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-4 bg-white w-full">
                            <div className="keen-slider col-span-1">
                            <div className="bg-gradient-to-r from-[#752efac3] to-[#4b6fffad] flex justify-center items-center py-10 rounded-md overflow-hidden">
                                                <div className="hover:scale-110 duration-1000 transition-all ">
                                                    <img className="w-full h-[180px]" src={img} alt="" />
                                                </div>
                                            </div>

                            </div>
                            <div className="col-span-2 space-y-1 mt-3">
                                <h2 className="text-xl md:text-2xl">{productTitle}</h2>
                                <div className="flex items-center gap-2 text-base py-2">
                                    <h4 className="text-xs font-semibold text-[#FFD100]">
                                        <Rating
                                            emptySymbol={<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="h-4 w-full"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                />
                                            </svg>}
                                            fullSymbol={<svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="h-4 w-full"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>}
                                            initialRating={rating}
                                            readonly
                                        />
                                    </h4>
                                    <p>{rating ? rating + ' ' + 'Rating' : ''}</p>
                                </div>
                                <div className="pb-6">
                                    <div className="text-sm flex items-center">
                                        <p className="line-through">{price}</p>
                                        <p>-{price}%</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 pt-6">
                                    <button className="bg-[#3fa9fb] hover:bg-[#4795d1] py-2 px-2 md:py-3 md:px-7 text-white text-base font-semibold rounded-lg flex-1">Buy Now</button>
                                    <button className="bg-[#6B3FFB] hover:bg-[#603ecd] py-2 px-1.5 md:py-3 md:px-7 text-white text-base font-semibold rounded-lg flex-1">Add To Cart</button>
                                </div>
                            </div>
                            {
                                product ? <div className="col-span-1 bg-[#FAFAFA] py-10">
                                    <div className="px-6">
                                        <p className="text-sm font-semibold text-gray-500 pb-3">Delivery</p>
                                        <div className="flex items-center gap-2 text-sm py-2">
                                            <p className="text-xl">
                                                <GrLocation />
                                            </p>
                                            <h5>Dhaka, Bangladesh</h5>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm py-2">
                                            <p className="text-2xl">
                                                <TbTruckDelivery />
                                            </p>
                                            <div className="flex items-center gap-7">
                                                <h5><span className="font-semibold">Standard Delivery</span> 5 - 10 day</h5>
                                                <h4>$<span className="font-semibold">99</span></h4>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-2">
                                            <p className="text-xl">
                                                <BsCashCoin />
                                            </p>
                                            <h5>Cash on Delivery available</h5>
                                        </div>
                                    </div>
                                    <div className="divider py-1"></div>
                                    <div className="px-6">
                                        <p className="text-sm font-semibold text-gray-500 pb-3">Service</p>
                                        <div className="flex items-center gap-2 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <MdVerified />
                                            </p>
                                            <h5>
                                                100% Authentic from Trusted Brand</h5>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-xl">
                                                <FaCircleArrowLeft />
                                            </p>
                                            <h5>14 days free & easy return</h5>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm py-2 text-[#4B6FFF]">
                                            <p className="text-2xl">
                                                <HiMiniShieldCheck />
                                            </p>
                                            <h5>1 Year Seller Warranty</h5>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    ''
                            }
                        </div>
                    </div>
                    <div className="divider py-4"></div>
                    <div className="bg-white p-6 md:p-6 xl:p-10">
                        <h3 className="text-xl font-bold text-gray-500 mb-4">Product Details:</h3>
                        <p>{description}</p>
                    </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default ProductsDetails;
