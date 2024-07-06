import Navbar from "./components/Navbar"
import Highlight from "./components/Highlight"

import hip from './assets/hip.png'
import workout from './assets/workout.png'

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center bg-yellow h-screen w-screen'>
      <Navbar />
      <main className='max-w-[1440px] w-full mb-12 bg-black flex-1 h-full'>
        <Highlight image={workout}>
            <h2 className="text-[4rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[1.4rem]">O QUE <span className="text-yellow">VOCÊ</span> PRECISA</h2>          
            <h2 className="text-[3rem] max-lg:text-[2rem] max-md:text-[1rem] max-sm:text-[1rem]">SABER PARA <span className="text-yellow">EMAGRECER</span></h2>          
            <h6 className="max-lg:text-[0.8rem] max-md:text-[0.6rem] max-sm:text-[0.4rem]">NÃO ESQUEÇA DE CONSULTAR UM PROFISSIONAL</h6>
        </Highlight>
        <Highlight image={hip}>
            <h2 className="text-[4rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[1.4rem]">CALCULAR A <span className="text-yellow">PORCENTAGEM</span></h2>          
            <h2 className="text-[3rem] max-lg:text-[2rem] max-md:text-[1rem] max-sm:text-[1rem]">DE <span className="text-yellow">GORDURA</span> CORPORAL</h2>          
            <h6 className="max-lg:text-[0.8rem] max-md:text-[0.6rem] max-sm:text-[0.4rem]">NÃO ESQUEÇA DE CONSULTAR UM PROFISSIONAL</h6>
        </Highlight>
      </main>
    </div>
  )
}
