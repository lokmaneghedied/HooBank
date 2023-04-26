import { logo , menu , close } from "../assets";
import { navLinks } from "../constants";
import { useState , useEffect } from "react";

const NavBar = () => {

    const [toggleNav , setToggleNav] = useState(false)
    const [isScrolled , setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > 0) {
              setIsScrolled(true)
          } else{
              setIsScrolled(false)
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return ( 
        <div className={isScrolled ? 'fixed w-full bg-[#00040f] text-white z-30' : 'fixed w-full text-white z-30'}>
            {/* NAV_FOR_DESKTOP */}
            <nav className="hidden md:visible md:flex justify-between py-4 px-10 w-full ">
                <div className="lg:w-1/3 grid justify-items-start">
                    <img className="md:h-[32px] xl:h-[46px]" src={logo} alt="HooBank logo" />
                </div>
                <div className='lg:w-1/3 md:flex md:justify-end md:items-center md:text-sm lg:text-base xl:text-lg '>
                    {navLinks.map((navLink , index)=>(
                        <ul className={navLinks.length - 1 === index ? 'mr-0  hover:underline underline-offset-8 hover:scale-95' : 'mr-4 hover:scale-95 hover:underline underline-offset-8'} key={navLink.id}><a href={`#${navLink.link}`}>{navLink.title}</a></ul>
                    ))}
                </div>
            </nav>
            <nav>
                {/* NAV_FOR_MOBILE */}
            <div className="md:hidden w-full bg-[#00040f]">
                <nav className="flex justify-between p-4 w-full">
                    <img className="h-[24px] " src={logo} alt="HooBank logo" />
                    <img className="h-[15px] place-self-end" onClick={()=>setToggleNav(!toggleNav)} src={!toggleNav ? menu : close } alt="Toggle NavBar"/>
                </nav>
                {toggleNav && <div className="w-full grid justify-items-center space-y-4 text-xs pb-4 topBar">
                    {navLinks.map((navLink)=>(
                        <ul key={navLink.id}>
                            <a className="hover:underline underline-offset-4" href={`#${navLink.link}`}>
                                {navLink.title}
                            </a>
                        </ul>
                ))}</div>}
            </div>
            </nav>

        </div>
     );
}

export default NavBar;
