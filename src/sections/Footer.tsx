import { Vector, logo } from "../assets";
import { community, partner, socialMedia, usefulLinks } from "../constants";
import { styles } from "../style";

const Footer = () => {
    return ( 
        <footer className="bg-[#0b0a0c99] grid justify-items-center h-full lg:h-96 w-full divide-y divide-[#3F3E45] space-y-4 lg:space-y-0">
            <section className="h-full w-10/12 grid grid-rows-2 grid-flow-col gap-y-10 lg:flex lg:justify-center lg:items-center pt-4 lg:pt-0">
                {/* HooBank_LOGO */}
                <div className="w-1/2 lg:w-1/3 space-y-4">
                    <img src={logo} alt="HooBank Logo" />
                    <p className={styles.paragraph}>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <span className="lg:hidden space-y-2">
                    <span className="lg:hidden space-y-2">
                        <h2 className={styles.subTitle}>Useful Links</h2>
                        {usefulLinks.map((link)=>(
                            <p className={`cursor-pointer hover:scale-105 lg:hover:scale-110 ${styles.paragraph}`}>{link}</p>
                        ))}
                    </span>
                </span>
                <span className="lg:hidden space-y-2">
                    <span className="lg:hidden space-y-2">
                        <h2 className={styles.subTitle}>Community</h2>
                        {community.map((link)=>(
                            <p className={`cursor-pointer hover:scale-105 lg:hover:scale-110 ${styles.paragraph}`}>{link}</p>
                        ))}
                    </span>
                </span>
                {/* LINKS */}
                <div className="lg:w-2/3 flex lg:justify-around">
                    <span className="hidden lg:block space-y-2">
                        <h2 className={styles.subTitle}>Useful Links</h2>
                        {usefulLinks.map((link)=>(
                            <p className={`cursor-pointer hover:scale-105 lg:hover:scale-110 ${styles.paragraph}`}>{link}</p>
                        ))}
                    </span>
                    <span className="hidden lg:block space-y-2">
                        <h2 className={styles.subTitle}>Community</h2>
                        {community.map((link)=>(
                            <p className={`cursor-pointer hover:scale-105 lg:hover:scale-110 ${styles.paragraph}`}>{link}</p>
                        ))}
                    </span>
                    <span className="space-y-2">
                        <h2 className={styles.subTitle}>Partner</h2>
                        {partner.map((link)=>(
                            <p className={`cursor-pointer hover:scale-105 lg:hover:scale-110 ${styles.paragraph}`}>{link}</p>
                        ))}
                    </span>
                </div>
            </section>
                {/* COPYRIGHT + SOCIAL_MEDIA_LINKS */}
            <section className="w-10/12 grid content-around lsm:flex lsm:justify-between h-20 lg:h-auto">
                <span className={`flex items-center space-x-1 ${styles.paragraph}`}>
                    <p>Copyright</p>
                    <img className="h-fit" src={Vector} alt="Copyright" />
                    <p>April 2023 - GHEDIED Lokmane</p>
                </span>
                <span className="flex items-center space-x-3 place-self-center lsm:place-self-auto">
                    {socialMedia.map((item)=>(
                        <img className="cursor-pointer hover:scale-105 lg:hover:scale-110" src={item.icon} alt={item.name} />
                    ))}
                </span>
            </section>
        </footer>
     );
}
 
export default Footer;