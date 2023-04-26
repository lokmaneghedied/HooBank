import { arrowUp } from "../assets";

const GetStarted = () => {
    return ( 
        <div className="grid w-[100px] h-[100px] lsm:w-[140px] lsm:h-[140px] lg:w-[120px] lg:h-[120px] 2xl:w-[160px] 2xl:h-[160px] rounded-full bgGradient__blue p-0.5 cursor-pointer hover:scale-90">
            <div className="bg-[#00040f] w-full h-full rounded-full grid justify-items-center content-center place-self-center ">
                <span className="text__blue flex space-x-1 2xl:text-2xl">
                    <p>Get</p>
                    <img src={arrowUp} alt="arrow Up" />
                </span>
                <p className="text__blue 2xl:text-2xl">Started</p>
            </div>
        </div>
     );
}
 
export default GetStarted;