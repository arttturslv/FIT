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
        <nav className=' bg-navy w-screen h-16 flex justify-center'>
            <div className='flex w-full max-w-[1440px] justify-around pt-3 pb-3 items-center'>
                <h1 className='text-yellow text-3xl button-hover '>FIT</h1>
                <div className='text-peach flex justify-between gap-10 items-center max-sm:hidden '>
                    <h6 className='button-hover'>INICIO</h6>
                    <h6 className='button-hover'>CALORIAS</h6>
                    <h6 className='button-hover'>GORDURA</h6>
                </div>
                <img onClick={switchMenuVisibility} src={Menu} alt="icone para menu de navegação" className="size-8 hidden max-sm:block" />
            </div>
            <div className={view? 'text-peach bg-navy mt-16 justify-between gap-12 items-center absolute max-sm:block transition-all duration-500' : 'text-peach bg-navy mt-[-200px] justify-between gap-12 items-center absolute max-sm:block  transition-all duration-500'}>
                <h6 className='button-hover w-screen pl-8 py-2'>INICIO</h6>
                <h6 className='button-hover w-screen pl-8 py-2'>CALORIAS</h6>
                <h6 className='button-hover w-screen pl-8 py-2'>GORDURA</h6>
            </div>
          
        </nav>
    );
}

