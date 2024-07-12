import { useState } from 'react'

import FullForm from './FullForm';

export default function FormOutcome({ type }) {
    const [resultado, setResultado] = useState(0);
    const [weight, setWeight] = useState(0);

    if (type == 'TMB') {
        return (
            <div>
                <div className="flex justify-around md:flex-row items-center flex-col space-y-4 text-xl">
                    <div className="flex-row space-y-2">
                        <FullForm type={type} setResultado={setResultado} setWeight={setWeight} weight={weight} />
                    </div>

                    <div className="flex-row space-y-2">
                        <h5 className='text-center text-2xl font-bold'>RESULTADO</h5>
                        <div className='flex-col space-y-4'>
                            <div className='space-y-1'>
                                <p className='font-bold'>Quantidade minima de calorias:</p>
                                <p className='px-6 py-2 text-center bg-navy'>{(resultado).toFixed(2)}</p>
                            </div>
                            <div className='space-y-1'>
                                <p className=' font-bold'>Considerando exercícios físicos:</p>
                                <div className='space-y-1'>
                                    <p>Nenhuma atividade física:</p>
                                    <p className='px-6 py-2 text-center bg-navy'>{(resultado * 1.25).toFixed(2)}</p>
                                </div>
                                <div className='space-y-1'>
                                    <p>Atividade física moderada:</p>
                                    <p className='px-6 py-2 text-center bg-navy'>{(resultado * 1.35).toFixed(2)}</p>
                                </div>
                                <div className='space-y-1'>
                                    <p>Atividade física intensa:</p>
                                    <p className='px-6 py-2 text-center bg-navy'>{(resultado * 1.45).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if (type == 'BF') {
        return (
            <div>
                <div className="flex justify-around md:flex-row items-center flex-col space-y-4 text-xl">
                    <div className="flex-row space-y-2">
                        <FullForm type={type} setResultado={setResultado} setWeight={setWeight} weight={weight}/>
                    </div>

                    <div className="flex-row space-y-2">
                        <h5 className='text-center text-2xl font-bold'>RESULTADO</h5>
                        <div className='flex-col space-y-4'>
                            <div className='space-y-1'>
                                <p className=' font-bold'>Porcentagem de gordura (BF)</p>
                                <p className='px-6 py-2  text-center bg-navy'>{(resultado).toFixed(2)}%</p>
                            </div>
                            <div className='space-y-1'>
                                <p className='font-bold'>Massa magra</p>
                                <div className='space-y-1'>
                                    <p>Refere-se a musculos e ossos:</p>
                                    <p className='px-6 py-2  text-center bg-navy'>{((1-(resultado / 100)) * weight).toFixed(2)} kg</p>
                                </div>
                                <p className=' font-bold'>Massa gorda</p>
                                <div className='space-y-1'>
                                    <p>Refere-se a gordura</p>
                                    <p className='px-6 py-2 text-center bg-navy'>{((resultado / 100) * weight).toFixed(2)} kg</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}