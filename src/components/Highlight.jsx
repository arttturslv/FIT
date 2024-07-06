export default function Highlight ({image, children}) {

    const height = window.innerWidth > 1200 ? 1200: window.innerHeight;

    return(
    <div style={{height:height}} className=" justify-center items-center flex bg-gradient-to-t from-black">
        <img src={image} className='object-cover filter brightness-50 bg-gradient-to-t from-[#fff] ' />
        <div className='flex flex-col absolute'>
            {children}
        </div>
    </div>
    );
}
