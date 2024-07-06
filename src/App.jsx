import Navbar from "./components/Navbar"
import Highlight from "./components/Highlight"
import IntroductionText from "./components/IntroductionText"

import hip from './assets/hip.png'
import workout from './assets/workout.png'

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center bg-yellow h-screen w-screen'>
      <Navbar />
      <main className='max-w-[1440px] w-full bg-black flex-1 h-full'>
        <Highlight image={workout}>
            <h2 className="text-[4rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[1.4rem]">O QUE <span className="text-yellow">VOCÊ</span> PRECISA</h2>          
            <h2 className="text-[3rem] max-lg:text-[2rem] max-md:text-[1rem] max-sm:text-[1rem]">SABER PARA <span className="text-yellow">EMAGRECER</span></h2>          
            <h6 className="max-lg:text-[0.8rem] max-md:text-[0.6rem] max-sm:text-[0.4rem]">NÃO ESQUEÇA DE CONSULTAR UM PROFISSIONAL</h6>
        </Highlight>

        <IntroductionText
          title={'CALORIAS DIÁRIAS'}
          subtitle={'TAXA METABÓLICA BASAL'}
          text={`
            Taxa metabólica basal (TMB) ou gasto calórico basal é uma métrica que representa a quantidade mínima de energia necessária para manter as funções vitais do organismo em repouso.
            É necessário calcular o TMB para elaborar planos nutricionais adequados baseando na quantidade de calorias necessárias e no quantidade de atividades físicas executadas.
            Existem várias formas de calcular o gasto calórico basal, a que utilizaremos aqui será a formula de Harris-Benedict (fonte da formula), onde é necessário informar o peso em quilos, a altura em centímetros e a idade.`}
          formula={
            {
              men:"66+(13,7*PESO EM KG) + (5,0*ALTURA EM CM) - (6,8*IDADE)", 
              woman:"asdad"
            }
          }
        />

        <Highlight image={hip}>
            <h2 className="text-[4rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[1.4rem]">CALCULAR A <span className="text-yellow">PORCENTAGEM</span></h2>          
            <h2 className="text-[3rem] max-lg:text-[2rem] max-md:text-[1rem] max-sm:text-[1rem]">DE <span className="text-yellow">GORDURA</span> CORPORAL</h2>          
            <h6 className="max-lg:text-[0.8rem] max-md:text-[0.6rem] max-sm:text-[0.4rem]">NÃO ESQUEÇA DE CONSULTAR UM PROFISSIONAL</h6>
        </Highlight>

        <IntroductionText
          title={'GORDURA CORPORAL'}
          subtitle={'PERCENTUAL DE GORDURA'}
          text={`
            O calculo de gordura corporal (BF) é uma metrica que representa a composição corporal, composto pela massa magra (músculos e vísceras) e a massa gorda (gordura).
            O calculo da porcentagem de gordura corporal pode ser uma boa escolha para ter uma maior precisão do que o Índice de Massa Corpórea (IMC), mas ainda é necessário entender que o método utilizado com base nas medidas corporais usando uma fita metrica são menos precisas que um feito por um profissional, além de que, os resultados podem não refletir a realidade em casos de atletas.
            Existem várias formas de calcular a porcentagem de gordura corporal, mas o utilizado aqui é a formula revisada (Modelo C4) da formula de Hodgdon & Beckett. Você pode aprender mais aqui: https://www.youtube.com/watch?v=WVRWtXnPL2s&t=698s`}
          formula={
            {
              men:"66+(13,7*PESO EM KG) + (5,0*ALTURA EM CM) - (6,8*IDADE)", 
              woman:"asdad"
            }
          }
        />


      </main>
    </div>
  )
}
