import { bill , card , apple , google } from "../assets";
import { styles } from "../style";
const Solutions = () => {
    return ( 
        <div id='solution' className="lg:h-full grid relative">
                {/* GRADIENT_BACKGROUND */}
            <div className="absolute z-10 w-[50%] h-[30%] lg:w-[30%] lg:h-[50%] rounded-full inset-y-1/3 left-0 pink__gradient" />
            <div className="absolute z-0 w-[40%] h-[30%] lg:w-[30%] lg:h-[50%] rounded-full inset-y-1/3 left-0 white__gradient" />
                {/* MAIN_DIV */}
            <div className="w-10/12 lg:h-full place-self-center space-y-6">
                {/* BILLING_DIV */}
                <div className="w-full h-1/2 flex items-center flex-col-reverse lg:flex-row lg:justify-around lg:items-center ">
                    <img className="w-[80%] lsm:w-[50%] lg:w-[40%] pt-6 lg-pt-0 z-20" src={bill} alt="bill" />
                    <div className="lg:w-[40%] space-y-2 md:space-y-4 lg:space-y-6 z-20">
                        <h1 className={styles.title}>Easily control your billing & invoicing.</h1>
                        <p className={styles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis voluptatum modi placeat praesentium ea reprehenderit mollitia similique quae maiores dolorum voluptate sit ipsa at, unde maxime rerum. Voluptates, nihil.</p>
                        <span className="flex space-x-4">
                            <img className="cursor-pointer hover:scale-90 w-1/3 lsm:w-1/4 lg:w-auto" src={apple} alt="apple_logo" />
                            <img className="cursor-pointer hover:scale-90 w-1/3 lsm:w-1/4 lg:w-auto" src={google} alt="google_logo" />
                        </span>
                    </div>
                </div>
                {/* CARDS_DIV */}
                <div className="w-full h-1/2 grid justify-items-center lg:flex lg:justify-around lg:items-center space-y-6 ">
                    <div className="lg:w-[40%] space-y-2 md:space-y-4 lg:space-y-6 z-20">
                        <h1 className={styles.title }>Find a better card deal in few easy steps.</h1>
                        <p className={styles.paragraph }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quis voluptatum modi placeat praesentium ea reprehenderit mollitia similique quae maiores dolorum voluptate sit ipsa at, unde maxime rerum. Voluptates, nihil.</p>
                        <button className={styles.blue__btn}>Get Started</button>
                    </div>
                    <img className="w-[70%] lsm:w-[50%] lg:w-[40%] z-20" src={card} alt="bill" />
                </div>
            </div>
        </div>
     );
}
 
export default Solutions;