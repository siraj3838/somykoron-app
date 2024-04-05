
import { useEffect, useState } from "react";
import Navbar from "../src/scenes/Navbar";
import { selectedPage } from "./shared/types";
import Home from "./scenes/Home";
import Products from "./scenes/Products";
import { Toaster } from "react-hot-toast";
import AboutUs from "./scenes/AboutUs";


function App() {
const [selectedPage, setSelectedPage] = useState<string>('home');

const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect(()=>{
  const handleScroll = () =>{
    if(window.scrollY === 0){
      setIsTopOfPage(true);
      setSelectedPage(selectedPage.Home);
    }
    if(window.scrollY !== 0) setIsTopOfPage(false)
  }
window.addEventListener("scroll", handleScroll)
return () => window.removeEventListener("scroll", handleScroll)
},[])

  return (
    <div className='app bg-gray-20'>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <Navbar
       isTopOfPage={isTopOfPage}
       setIsTopOfPage={setIsTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      />
      <Home 
      setSelectedPage={setSelectedPage}
      />
      <Products 
      setSelectedPage={setSelectedPage}
      />
      <AboutUs 
      setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
