import { styles } from "../style";
import { businesses } from "../constants";
const Business = () => {
    return ( 
        <div className="h-[550px] sm:h-[540px] lsm:h-[500px] md:h-[540px] lg:h-96 w-full grid ">
            <div className="place-self-center h-4/5 w-10/12 lg:flex lg:justify-around lg:items-center space-y-8 lg:space-y-0">
                <div className="lg:w-[40%] space-y-2 md:space-y-4 lg:space-y-6">
                    <h1 className={styles.title} >You do the business, we’ll handle the money.</h1>
                    <p className={styles.paragraph}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <button className={styles.blue__btn}>Get Started</button>
                </div>
                <div className="lg:w-[40%] space-y-2 md:space-y-4 lg:space-y-6">
                    {businesses.map((business=>(
                        <div className="flex items-center space-x-5 p-2 bgGradient__gray hover:shadow-inner z-[20] cursor-pointer rounded-2xl hover:hover:scale-95" key={business.id}>
                            <img src={business.icon} alt="icon" />
                            <span>
                                <h2 className="text-white font-bold">{business.title}</h2>
                                <p className={styles.paragraph}>{business.content}</p>
                            </span>
                        </div>
                    )))}
                </div>
            </div>
        </div>
     );
}
 
export default Business;