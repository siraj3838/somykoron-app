import { useState } from "react";

import Logo from "@/assets/Logo.png";
import { selectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import ActionButton from "@/shared/ActionButton";
import { Link } from "react-router-dom";



type Props = {
  isTopOfPage: boolean;
    selectedPage: selectedPage;
    setSelectedPage: (value: selectedPage) => void; 
}

const NavbarTwo = ({isTopOfPage, selectedPage,setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    const navbarBg = isTopOfPage ? "" : "bg-primary-100 drop-shadow"




  return (
    <nav>
        <div className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} w-5/6 mx-auto`}>
              <div className={`${flexBetween} w-full gap-16`}>
                {/* left side Logo */}
                <img className="w-14" src={Logo} alt="" />
                {/* right side Menu */}
                {
                  isAboveMediumScreen ? <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link 
                     
                    to={'/'}>Home</Link>
                    
                  </div>
                  <div className={`${flexBetween} gap-8`}>
                    <p>Sing In</p>
                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                  </div>
                </div>
                :
                <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className="w-6 h-6 text-white"></Bars3Icon>
                </button>
                }
                
              </div>
            </div>
        </div>

      {/* mobile Menu */}
      {
        !isAboveMediumScreen && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
            {/* close icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
              </button>
            </div>
            {/* menu */}
            <div className={`flex flex-col ml-[33%] gap-10 text-2xl`}>
            <Link 
                     
                    to={'/'}>Home</Link>
                    
                  </div>
          </div>  
      )}

    </nav>
  )
}
export default NavbarTwo;