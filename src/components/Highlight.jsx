export default function Highlight ({image, children}) {

    const height = window.innerWidth > 1200 ? 1200: window.innerHeight;

    return(
    <div style={{height:height}} className="w-full justify-center max-h-[700px] items-center h-[700px] flex bg-gradient-to-t from-black">
        <div className="relative w-full max-h-[700px] h-[700px] bg-yellow object-cover ">
            <img src={image} className='object-cover absolute size-full top-0 left-0 filter brightness-50 bg-gradient-to-t from-[#fff] '/>
        </div>
        <div className='flex flex-col absolute px-16 '>
            {children}
        </div>
    </div>
    );
}
