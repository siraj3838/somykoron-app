import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { selectedPage } from '@/shared/types';
import mobile from '../../assets/mobile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import phone from '../../assets/phone1.png'
import phone2 from '../../assets/phone2.png'
import phone3 from '../../assets/phone3.png'
import phone4 from '../../assets/phone4.png'
import phone5 from '../../assets/phone5.png'
import phone6 from '../../assets/phone6.png'
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: selectedPage) => void; 
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");



  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
{/* image */}
      <motion.div 
      className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
      onViewportEnter={()=> setSelectedPage(selectedPage.Home)}
      >
        {/* main header */}
        <div className='z-10 mt-32 md:basis-3/5'>
            {/* heading */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
            }}
            className='md:-mt-20'>
                <div className='relative'>
                    <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                        <h3 className='text-5xl font-extrabold'>Somykoron</h3>
                    </div>
                </div>
                <p className='mt-8 text-sm'>
                At Somykoron E-Commerce, we believe in providing more than just products; we deliver exceptional experiences. Join our community of satisfied shoppers today and unlock a world of endless possibilities!
                </p>
            </motion.div>
            {/* Action    */}
            <motion.div className='mt-8 flex items-center gap-8 md:justify-start'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{delay: 0.2 ,duration: 0.5}}
            variants={{
                hidden: { opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
            }}
            >
            <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
            </ActionButton>
            <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500' 
            onClick={() => setSelectedPage(selectedPage.ContactUs)}
            href={`#${selectedPage.ContactUs}`}
            >
                <p>Learn More</p>
            </AnchorLink>
            </motion.div>
        </div>
         {/* image */}
         <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
            <img src={mobile} alt="mobile" />
        </div>
      </motion.div>

      {/* sponsor */}
      {
        isAboveMediumScreen && (
            <div className='h-[150px] w-full bg-primary-100 py-10'>
                <div className='mx-auto w-5/6'>
                    <div className='flex w-3/5 items-center justify-between gap-8'>
                        <img className='w-32 h-14' src={phone} alt="" />
                        <img className='w-32 h-14' src={phone2} alt="" />
                        <img className='w-32 h-14' src={phone3} alt="" />
                        <img className='w-32 h-14' src={phone4} alt="" />
                        <img className='w-32 h-14' src={phone5} alt="" />
                        <img className='w-32 h-14' src={phone6} alt="" />
                    </div>
                </div>
            </div>
        )
      }
    </section>
  )
}

export default Home