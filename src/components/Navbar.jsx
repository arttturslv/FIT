import { useState } from "react";
import Menu from "../assets/Icons/Menu.svg"

export default function Navbar() {
    const [view, setView] = useState(false)
    
    const switchMenuVisibility = () => {
        if(view) {
            setView((prev) => !prev);
        } else {
            setView((prev) => !prev);
        }
    } 

    return (
        <nav className=' bg-navy w-full h-16 z-50  flex justify-center'>
            <div className='flex w-full max-w-[1440px] justify-around pt-3 pb-3 items-center'>
                <h1 className='text-yellow text-3xl button-hover '>FIT</h1>
                <div className='text-peach flex justify-between gap-10 items-center max-sm:hidden '>
                    <a href="#inicio"><h3 className='button-hover'>INICIO</h3></a>
                    <a href="#calorias"><h3 className='button-hover'>CALORIAS</h3></a>
                    <a href="#gorduras"><h3 className='button-hover'>GORDURA</h3></a>
                </div>
                <img onClick={switchMenuVisibility} src={Menu} alt="icone para menu de navegação" className="size-8 hidden max-sm:block cursor-pointer" />
            </div>
            <div className={view? 'text-peach z-50 w-full bg-navy mt-16 justify-between gap-12 items-center absolute max-sm:block transition-all duration-500' : 'text-peach  bg-navy mt-[-200px] w-full z-0 justify-between gap-12 items-center absolute max-sm:block  transition-all duration-500'}>
                <a href="#inicio"><h3 className='button-hover  pl-8 py-2'>INICIO</h3></a>
                <a href="#calorias"><h3 className='button-hover pl-8 py-2'>CALORIAS</h3></a>
                <a href="#gorduras"><h3 className='button-hover pl-8 py-2'>GORDURA</h3></a>
            </div>
          
        </nav>
    );
}

