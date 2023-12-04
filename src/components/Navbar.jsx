import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';


import Logo from "../assets/IYTEEN.png";


const SubNav = ({ isOpen, setIsOpen }) => {
    const [translate, setTranslate] = useState("-translate-y-[100%]");
    useEffect(() => {
        if (isOpen) {
            setTranslate("-translate-y-[0%]");
        }
        else {
            setTranslate("-translate-y-[100%]");
        }
    }, [isOpen])

    return (
        <div className={`bg-red-500 sm:px-8 px-2 bg-white py-2 ${translate} relative z-0 transition-all duration-300 ease-linear`}>
            <h3 onClick={() => {
                window.scrollTo(0,0); 
                setIsOpen(false);
            }} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300 text-white'>6 Aralık Çarşamba</h3>
            <h3 onClick={() => {
                const y = document.getElementById("yedi").offsetTop - 90;
                window.scrollTo(0,y); 
                setIsOpen(false);
            }} className='mb-2 cursor-pointer text-black py-2 px-4 border-2 hover:bg-white/10 rounded-xl transition duration-300 text-white'>7 Aralık Perşembe</h3>
            
        </div>
    )
}


const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const x = window.innerWidth;

    useEffect(() => {        
        if (x <= 880) {
            setHamburger(true);
        }
        else {
            setHamburger(false);
        }
    }, [x]);

  return (
    <main className='fixed top-0 w-screen'>
    <nav className='relative shadow-black/20 shadow-2xl flex flex-col items-center justify-center py-2 h-full z-10 bg-white'>
        <div className='container max-w-7xl flex justify-between items-center md:px-10 px-5'>
            <img src={Logo} alt="IYTE Enerji Sistemleri Topluluğu Logosu" className="h-[50px] lg:h-[100px] md:h-[75px] " srcset="" />

            {
                !hamburger ? (
                    <div className='flex items-center flex-end gap-10'>
                        <a href='#6'><h2 onClick={() => {
                            const y = document.getElementById("altı").offsetTop - 90;
                            window.scrollTo(0,y); 
                        }}>6 Aralık Çarşamba</h2></a>
                        <a href='#7'><h2 onClick={() => {
                            const y = document.getElementById("yedi").offsetTop - 90;
                            window.scrollTo(0,y); 
                        }}>7 Aralık Perşembe</h2></a>
                    </div>
                ) :
                (
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon />
                    </button>
                )
            }
        </div>

    </nav>
    {
        hamburger ? (<SubNav isOpen={isOpen} setIsOpen={setIsOpen} />) : null
    }
    </main>
  )
}

export default Navbar