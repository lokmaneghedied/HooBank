import { aboutUsLinks, peoples } from "../constants";
import { styles } from "../style";
import { quotes } from "../assets";
const About = () => {
    return ( 
        <div id="about" className="w-full h-full lg:h-screen grid relative">
            {/* GRADIENT_BACKGROUND */}
            {/* <div className="absolute z-10 w-[50%] h-[30%] lg:w-[30%] lg:h-[50%] rounded-full inset-y-1/3 right-0 blue__gradient" />
            <div className="absolute z-0 w-[40%] h-[30%] lg:w-[30%] lg:h-[50%] rounded-full inset-y-1/3 right-0 white__gradient" /> */}
                        {/* MAIN_DIV */}
            <div className="w-10/12 pt-6 lg:pt-0 lg:h-[90%] place-self-center space-y-6 xl:space-y-8">
                        {/* WHAT_PEOPLE_SAY_ABOUT_US */}
                <section className="w-full h-[7.5%] lg:h-[25%] lg:flex lg:justify-around lg:items-center space-y-4 lg:space-y-0">
                    <h1 className={`${styles.title} lg:w-[40%]`}>What people are saying about us</h1>
                    <p className={`${styles.paragraph} lg:w-[40%]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </section>
                        {/* FOUNDERS */}
                <section className="w-full h-[85%] lg:h-[55%] flex flex-col items-center lg:flex-row lg:justify-around lg:items-center space-y-2 lg:space-y-0 z-20">
                    {peoples.map((people)=>(
                        <span className="space-y-4 lsm:w-1/2 lg:w-1/4 h-full hover:shadow-inner z-20 cursor-pointer rounded-2xl hover:hover:scale-95 p-4 grid content-between bgGradient__gray " key={people.id}>
                            <img src={quotes} alt="quotes" />
                            <p className={`${styles.subTitle} `}>{people.quote}</p>
                            <span className="flex justify-center items-center space-x-4 z-20">
                                <img src={people.profile} alt="" />
                                <span className="z-20 ">
                                    <p className={styles.subTitle}>{people.name}</p>
                                    <p className={styles.paragraph}>{people.position}</p>
                                </span>
                            </span>
                        </span>
                    ))}
                </section>
                        {/* ABOUT_US_LINKS */}
                <section className="flex items-center justify-center space-x-6 sm:space-x-10 lg:space-x-20">
                        {aboutUsLinks.map((link)=>(
                            <span className="w-[12%] lg:h-10 flex items-center cursor-pointer hover:scale-110 lg:p-2">
                                <img src={link.icon} alt="" />
                            </span>
                        ))}
                </section>
            </div>
        </div>
     );
}
 
export default About;