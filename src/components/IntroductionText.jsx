export default function IntroductionText({title, subtitle, text, formula}) {
    return (
        <div className="text-peach px-8">
            <h3 className='text-4xl'>{title}</h3>
            <h5 className='mt-2 text-2xl font-bold'>{subtitle}</h5>
            <p className='mt-4 text-xl'>
               {text}
            </p>
            <h5 className='mt-4 text-2xl font-bold'>FÓRMULA</h5>
            <p className='mt-2 text-2xl'>Para homens:</p>
            <div className='text-center text-2xl flex justify-center'>
            <p className="bg-navy px-12 py-4 w-fit">{formula.men}</p>
            </div>
            <p className='mt-2 text-2xl'>Para mulheres:</p>
            <div className='text-center text-2xl flex justify-center'>
            <p className="bg-navy px-12 py-4 w-fit">{formula.woman}</p>
            </div>
        </div>
    )
}