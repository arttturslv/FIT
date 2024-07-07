import { useState } from 'react'

export default function FullForm({type, setResultado, setWeight, weight}) {

    const [gender, setGender] = useState(0);
    const [height, setHeight] = useState(0);
    const [waist, setWaist] = useState(0);
    const [neck, setNeck] = useState(0);
    const [hip, setHip] = useState(0);
    const [abdomen, setAbdomen] = useState(0);
    const [age, setAge] = useState(0);

    function calcularBFM() {
        let sum = ((85.79*Math.log10(abdomen-neck))-(62.56*Math.log10(height)))+12.76
        return sum;
    }
    
    function calcularBFF() {
        let sum = ((135.1*Math.log10(waist+hip-neck))-(97.93*Math.log10(height)))-46.65
        return sum;
    }

    function calcularTMBM() {
        let sum = (66 + (13.7 * weight) + (5.0 * height)) - (6.8 * age);
        return sum;
    }

    function calcularTMBF() {
        let sum = (665 + (9.6 * weight) + (1.8 * height)) - (4.7 * age);
        return sum;
    }

    function calcular() {
        var resultado;
        if(type=='BF') {
            if(gender==0) {
                resultado = (calcularBFM());
            } else {
                resultado = (calcularBFF());
            }
        } else {
            if(gender==0) {
                resultado = (calcularTMBM());
            } else {
                resultado = (calcularTMBF());
            }
        }
        console.log(resultado);
        if(!isNaN(resultado))
            setResultado(resultado)
    }


    return (
        <form className="w-[400px] h-fit text-xl">
            <div>
                <span className='flex justify-between'>
                    <p>Masculino</p>
                    <p>Feminino</p>
                </span>
                <input onChange={(e) => setGender(e.target.value)} className='w-full py-4' type="range" name="" id="" min="0" value={gender} step="1" max="1" />
            </div>
            <div>
                <p>Peso</p>
                <input onChange={(e) => setWeight(e.target.value)} className='w-full py-2 px-4 bg-black border-navy border-2 ' type="text" name="" id="" />
            </div>
            <div>
                <p>Altura</p>
                <input onChange={(e) => setHeight(e.target.value)} className='w-full py-2 px-4 bg-black border-navy border-2 ' type="text" name="" id="" />
            </div>
            <div>
                <p>Idade</p>
                <input onChange={(e) => setAge(e.target.value)} className='w-full py-2 px-4 bg-black border-navy border-2 ' type="text" name="" id="" />
            </div>

         
            {   
                type=="BF"?
                    gender==0?
                        <>
                            <div>
                                <p>Pescoço</p>
                                <input onChange={(e) => setNeck(e.target.value)} className='w-full py-2 px-4 bg-black border-navy border-2 ' type="text" name="" id="" />
                            </div>
                            <div>
                                <p>Abdômen</p>
                                <input onChange={(e) => setAbdomen(e.target.value)} className='w-full py-2 px-4 bg-black border-navy border-2 ' type="text" name="" id="" />
                            </div>
                        </>
                    :
                    <>
                        <div>
                            <p>Pescoço</p>
                            <input onChange={(e) => setNeck(e.target.value)} className='w-full py-2 px-4 bg-black border-navy border-2 ' type="text" name="" id="" />
                        </div>
                        <div>
                            <p>Cintura</p>
                            <input onChange={(e) => setWaist(e.target.value)} className='w-full py-2 px-4 bg-black border-navy border-2 ' type="text" name="" id="" />
                        </div>
                        <div>
                            <p>Quadril</p>
                            <input onChange={(e) => setHip(e.target.value)} className='w-full py-2 px-4 bg-black border-navy border-2 ' type="text" name="" id="" />
                        </div>
                    </>
                :
                <></>
            }
            <button 
            onClick={calcular}
            className={gender==0?"w-[400px] h-fit text-xl bg-gradient-to-bl from-[#1e81b0]/20 to-black mt-6 bg-navy border-yellow hover:bg-yellow hover:font-black hover:text-[#fff] border-4 button-hover pt-2 py-2":"w-[400px] h-fit text-xl bg-gradient-to-bl from-[#DA7187]/20 to-black mt-6 bg-navy border-yellow hover:bg-yellow hover:font-black hover:text-[#fff] border-4 button-hover pt-2 py-2"}
            type="button">CALCULAR</button>

        </form>
    )
}