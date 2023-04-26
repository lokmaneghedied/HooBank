import { styles } from "../style";

const Features = () => {
    return ( 
        <div id="features" className="h-60 xl:h-96 grid relative">
            {/* GRADIENT_BACKGROUND */}
            <div className="absolute z-10 w-[50%] h-[30%] lg:w-[30%] lg:h-[50%] rounded-full inset-y-1/3 left-0 pink__gradient" />
            <div className="absolute z-0 w-[40%] h-[30%] lg:w-[30%] lg:h-[50%] rounded-full inset-y-1/3 left-0 white__gradient" />
            <section className="w-10/12 2xl:w-8/12 md:h-40 lg:h-40 place-self-center flex flex-col lg:flex-row lg:justify-around lg:items-center Background__Gray rounded-xl px-4 py-6 lg:px-0 lg:py-0 space-y-4 lg:space-y-0">
                <div className="space-y-2 lg:space-y-4 ">
                    <h1 className={styles.title}>Let’s try our service now!</h1>
                    <p className={styles.paragraph}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <button className={`self-end lg:self-auto ${styles.blue__btn}`}>Get Started</button>
            </section>
        </div>
     );
}
 
export default Features;