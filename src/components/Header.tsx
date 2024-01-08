import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import aboutMe from "../image/logo.png";
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    const [toggleDepthBtn, setToggleDepthBtn] = useState(false);

    useEffect(()=>{
        toggleMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    }, [toggleMenu])
    return(
        <header className="w-full flex items-center justify-between sticky top-0 left-0 bg-white z-10 px-10 h-20">
            <h1 className="z-10 font-deco flex">
                <NavLink to="/" className="group flex items-center justify-center w-[203px]">
                  <span className="block group-hover:hidden text-2xl whitespace-nowrap h-full w-full">OMG WORLD</span> 
                  <span className="hidden group-hover:flex items-center h-full w-full"><img src={aboutMe} alt="개발하는 omg" className="h-16"/>minji</span>
                </NavLink>
            </h1>
            <button className={`${toggleMenu ? "rotate-90" : "rotate-0"} flex gap-1 p-4 z-10 font-deco transition-transform`} onClick={()=>{setToggleMenu(!toggleMenu);}}>
                <span className="w-3 h-3 bg-slate-800 block rounded-full"></span>
                <span className="w-3 h-3 bg-slate-800 block rounded-full"></span>
                <span className="w-3 h-3 bg-slate-800 block rounded-full"></span>
            </button>
            <nav className={`${toggleMenu ? "visible" : "invisible"} fixed left-0 top-0 bg-white w-full h-screen flex items-center justify-center `}>
                <ul className="text-center text-5xl font-bold space-y-16 font-deco">
                    <li><a href="/">Home</a></li>
                    <li>
                        <button onClick={()=>{setToggleDepthBtn(!toggleDepthBtn)}}>Career</button>
                        <ul className={`${toggleDepthBtn ? "visible h-auto" : "invisible h-0"} flex gap-20 mt-8 text-slate-500 text-3xl md:flex-col`}>                            
                            <li className="hover:text-emerald-500"><a href="/project/1">• First</a></li>
                            <li className="hover:text-emerald-500"><a href="/project/2">• Second</a></li>
                            <li className="hover:text-emerald-500"><a href="/project/3">• Third</a></li>
                        </ul>
                    </li>
                    <li><a href="https://aeolian-birch-d63.notion.site/STUDY-97754daa8d89448886c740a8c89318b8" target="_blank" rel="noreferrer noopener">Study</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;