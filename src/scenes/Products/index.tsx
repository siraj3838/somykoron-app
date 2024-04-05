
import useMediaQuery from "@/hooks/useMediaQuery";
import { selectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

type Props = {
    setSelectedPage: (value: selectedPage) => void;
}

const Products = ({setSelectedPage}: Props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../../../public/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
     }, []);
    // console.log(products);
    const handleBuyNow = (id) => {
        toast(
            "দয়া করে অপেক্ষা করুন এটির কাজ করা হবে",
            {
                duration: 6000,
            }
        );
    }
    

  return (
    <div id='products' className='mx-auto md:w-5/6 md:h-5/6 px-5 md:px-0'>
        <h3 className="text-4xl text-center font-bold my-8">Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-8">
        {
            products.map(product => <div className="rounded-xl bg-gray-20 pb-6" key={product?.title}>
                <Link to={`/productDetails/${product?.title}`}>
                <div className="p-8 bg-primary-100 rounded-tl-lg rounded-tr-lg">
                <img className="md:h-44 h-[10 0px] w-full" src={product?.img} alt="" />
                </div>
                </Link>
                <h3 className="pt-4 text-center font-semibold text-lg">{product?.title}</h3>
                <div className="flex items-center gap-2 pt-4 md:px-3 justify-center">
                                    <button className="rounded-md bg-blue-500
                                    text-white hover:bg-blue-600 hover:text-white md:py-1.5 md:px-3 md:text-sm text-[12px] p-[4px]">Buy Now</button>
                                    <button className="rounded-md bg-secondary-500 
                                    text-white hover:bg-primary-500 hover:text-white md:py-1.5 md:px-3 md:text-sm text-[12px] p-[4px]">Add To Cart</button>
                                </div>
            </div>)
        }
        </div>
    </div>
  )
}

export default Products