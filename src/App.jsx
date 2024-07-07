import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Highlight from "./components/Highlight"
import IntroductionText from "./components/IntroductionText"

import hip from './assets/hip.png'
import workout from './assets/workout.png'
import FormOutcome from "./components/FormOutcome"

export default function App() {
  return (
    <div id="inicio" className='flex flex-col items-center '>
      <Navbar />
      <main className='w-full bg-black flex flex-col space-y-4 justify-center items-center'>
        <Highlight image={workout}>
            <h2 className="text-[4rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[1.4rem] font-black">O QUE <span className="text-yellow">VOCÊ</span> PRECISA</h2>          
            <h2 className="text-[3rem] max-lg:text-[2rem] max-md:text-[1rem] max-sm:text-[1rem]">SABER PARA <span className="text-yellow">EMAGRECER</span></h2>          
            <h6 className="max-lg:text-[0.8rem] max-md:text-[0.6rem] max-sm:text-[0.4rem]">NÃO ESQUEÇA DE CONSULTAR UM PROFISSIONAL</h6>
        </Highlight>

        <div  id="calorias" className="max-w-[1440px] py-8 space-y-6">
          <IntroductionText
            title={'CALORIAS DIÁRIAS'}
            subtitle={'TAXA METABÓLICA BASAL'}
            text={`
              Taxa metabólica basal (TMB) ou gasto calórico basal é uma métrica que representa a quantidade mínima de energia necessária para manter as funções vitais do organismo em repouso.
              É necessário calcular o TMB para elaborar planos nutricionais adequados baseando na quantidade de calorias necessárias e no quantidade de atividades físicas executadas.
              Existem várias formas de calcular o gasto calórico basal, a que utilizaremos aqui será a formula de Harris-Benedict (fonte da formula), onde é necessário informar o peso em quilos, a altura em centímetros e a idade.`}
            formula={
              {
                men:"66 + (13.7 * PESO EM KG) + (5.0 * ALTURA) - (6.8 * IDADE)", 
                woman:"665 + (9.6 * PESO EM KG) + (1.8 * ALTURA)) - (4.7 * IDADE)"
              }
            }
          />
          <FormOutcome type={"TMB"}></FormOutcome>
        </div>

        <Highlight image={hip}>
            <h2 className="text-[4rem] max-lg:text-[3rem] max-md:text-[2rem] max-sm:text-[1.4rem]">CALCULAR A <span className="text-yellow">PORCENTAGEM</span></h2>          
            <h2 className="text-[3rem] max-lg:text-[2rem] max-md:text-[1rem] max-sm:text-[1rem]">DE <span className="text-yellow">GORDURA</span> CORPORAL</h2>          
            <h6 className="max-lg:text-[0.8rem] max-md:text-[0.6rem] max-sm:text-[0.4rem]">NÃO ESQUEÇA DE CONSULTAR UM PROFISSIONAL</h6>
        </Highlight>

        <div  id="gorduras" className="max-w-[1440px] py-8 space-y-6">
          <IntroductionText
            title={'GORDURA CORPORAL'}
            subtitle={'PERCENTUAL DE GORDURA'}
            text={`
              O calculo de gordura corporal (BF) é uma metrica que representa a composição corporal, composto pela massa magra (músculos e vísceras) e a massa gorda (gordura).
              O calculo da porcentagem de gordura corporal pode ser uma boa escolha para ter uma maior precisão do que o Índice de Massa Corpórea (IMC), mas ainda é necessário entender que o método utilizado com base nas medidas corporais usando uma fita metrica são menos precisas que um feito por um profissional, além de que, os resultados podem não refletir a realidade em casos de atletas.
              Existem várias formas de calcular a porcentagem de gordura corporal, mas o utilizado aqui é a formula revisada (Modelo C4) da formula de Hodgdon & Beckett. Você pode aprender mais aqui: https://www.youtube.com/watch?v=WVRWtXnPL2s&t=698s`}
            formula={
              {
                men:"((85.79 * log10(LARGURA DO ABDOMEN - LARGURA DO PESCOÇO)) - (62.56 * log10(ALTURA))) + 12.76", 
                woman:"((135.1 * log10(LARGURA DA CINTURA + LARGURA DO QUADRIL - LARGURA DO PESCOÇO)) - (97.93 * log10(ALTURA))) - 46.65"
              }
            }
          />
          <FormOutcome type={"BF"}></FormOutcome>
        </div>


      </main>
      <Footer></Footer>
    </div>
  )
}
