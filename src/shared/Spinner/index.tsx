import React from 'react'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div>
        <div className='md:py-20 bg-[#E3EEF8] flex justify-around items-center flex-col md:flex-row gap-10 md:gap-0 py-10 mt-8 lg:mt-0 px-5'>
            <div className='flex-1'>
                <h3 className='text-xl md:text-4xl font-bold pb-4 lg:pb-7 leading-tight text-center lg:text-left'>Your Premier Destination <br /> For <span className='bg-gradient-to-r from-[#772EFA] to-[#4B6FFF] text-transparent bg-clip-text'>Smartphones!</span></h3>
                <p className='lg:pr-20 flex flex-col gap-2 lg:gap-3 text-sm md:text-lg text-center lg:text-left'>
                    At Somykoron, we specialize in delivering unparalleled mobile experiences tailored to your lifestyle. Dive into our exclusive collection of the latest smartphones, meticulously curated to meet your every need and desire.
                    <br />
                    <span>Discover the pinnacle of technological innovation with our diverse range of mobile devices, featuring cutting-edge designs, powerful performance, and seamless connectivity. Whether you're a tech enthusiast, a savvy professional, or a casual user, WeShop offers the perfect smartphone to match your unique preferences.</span>
                </p>
            </div>
            <div className="loading-wrapper flex-1">
                <section className="container">
                    <div className="cube rotate">
                        <div className="front bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">P</div>
                        <div className="back bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">N</div>
                        <div className="right bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">H</div>
                        <div className="left bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">E</div>
                        <div className="top bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">O</div>
                        <div className="bottom bg-gradient-to-r from-[#752efac3] to-[#4b6fffad]">S</div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}

export default Spinner