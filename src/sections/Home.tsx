import { discount , robot} from "../assets";
import GetStarted from "../components/GetStarted"; 
import { styles } from "../style";
import { stats } from "../constants";


const Home = () => {
    return ( 
        <div id="home" className="h-full lg:h-screen space-y-6 lg:space-y-0">
            <div  className="h-[80%] lg:flex lg:justify-between lg:items-center text-white space-y-6 lg:space-y-0 lg:pt-10">
                <div className="lg:h-4/5 lg:w-3/5 lg:grid lg:content-center pt-[80px] lg:pt-0 px-3 lg:px-0 lg:pl-12 xl:pl-16 2xl:pl-32 space-y-4  z-20">
                    {/* DISCOUNT */}
                    <div className="flex space-x-2 py-1 px-2 discount__bg w-fit text-[8px] sm:text-xs md:text-sm 2xl:text-base">
                        <img className="lg:w-[26.67px] lg:h-[26.67px]" src={discount} alt="discount" />
                        <div className="text-[#ffffff99] flex items-center">
                            <p className="text-white">20%</p>
                            <p className="invisible">a</p>
                            <p>DISCOUNT FOR</p>
                            <p className="invisible">a</p>
                            <p className="text-white">1 MONTH</p>
                            <p className="invisible">a</p>
                            <p>ACCOUNT</p>
                        </div>
                    </div>
                    {/* TITLE + GET_STARTED_BUTTON */}
                    <div className="hidden lg:block lg:space-y-2">
                        <div className="flex space-x-20">
                            <span className="2xl:text-8xl xl:text-7xl lg:text-6xl lg:font-bold lg:space-y-2">
                                <h1>The Next</h1>
                                <h1 className=" textGradient__blue">Generation</h1>
                            </span>
                            <GetStarted />
                        </div>
                        <h1 className="lg:text-6xl lg:font-bold 2xl:text-8xl">Payment Method.</h1>
                    </div>
                    <div className="lg:hidden text-2xl sm:text-3xl md:text-5xl md:leading-normal font-bold space-y-1">
                            <h1>
                                The Next <span className=" textGradient__blue"> Generation</span> Payment Method.
                            </h1>
                    </div>
                    {/* DESCRIPTION */}
                    <div className={`lg:w-2/3 ${styles.paragraph}`}>
                        <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.</p>
                        <p>We examine annual percentage rates, annual fees.</p>
                    </div>
                </div>  
                    {/* ROBOT_IMAGE */}
                <div className="lg:h-4/5 grid sm:flex-row-reverse sm:flex sm:justify-between space-y-3 sm:space-y-0">
                    <img className="lg:h-full h-64 lsm:h-80 md:h-96 place-self-end z-[20]" src={robot} alt="robot logo" />
                    {/* SHADOW_BACKGROUND */}
                    {/* <div className="absolute z-0 w-[50%] h-[30%] lg:w-[10%] lg:h-[50%] rounded-full right-10 bottom-0 lg:right-10 lg:top-0 pink__gradient" />
                    <div className="absolute z-10 w-[50%] h-[10%] lg:w-[15%] lg:h-[50%] rounded-full bottom-0 right-10 lg:right-0 lg:bottom-40 white__gradient" />
                    <div className="absolute z-0 w-[50%] h-[10%] lg:w-[20%] lg:h-[50%] lg:right-20 lg:bottom-40 bottom-0 right-10 blue__gradient" /> */}
                    <div className="lg:hidden grid justify-items-center content-center w-full">
                        <GetStarted />
                    </div>
                </div>

            </div>
            {/* STATISTICS */}
            <div className="grid grid-cols-2 gap-4 lsm:flex lsm:justify-center divide-x">
                {stats.map((stat , index)=>(
                    <span className={stats.length - 1  === index ? 'flex items-center space-x-3 px-3 lsm:px-6 lg:px-10 xl:px-12 col-span-2 place-self-center':'flex justify-center items-center space-x-3 px-3 lsm:px-6 lg:px-10 xl:px-12'} key={stat.id}>
                        <p className="text-white text-sm lsm:text-base font-semibold lg:text-2xl lg:font-bold">{stat.value}</p>
                        <p className="textGradient__blue text-xs lsm:text-sm lg:text-base">{stat.content}</p>
                    </span>
                ))}
            </div>
        </div>
     );
}
 
export default Home;