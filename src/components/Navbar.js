import { useState, useEffect, useRef } from 'react';
import MobileMenu from './MobileMenu';
import './Navbar.css';
import { IoMenuOutline} from "react-icons/io5";

function Navbar({navRefs,menuOptions}){
    const [sticky, setSticky] = useState(false);
    const [showMobile, setShowMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setSticky(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleClickMobile = () => {
        setShowMobile(true);
        window.scrollTo(0,0)
    };

    const handleCloseMobile = () => {
        setShowMobile(false)
    }

    const renderedElements = menuOptions.map( (option, index) => {

        
        function scrolltoTargetAdjusted(homeScroll){
            var headerOffset = window.scrollY === 0 ? 180 : 84 
            var elementPosition = navRefs.current[index].getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY - headerOffset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
        
        const handleClick = () =>{
                scrolltoTargetAdjusted();
        }

        return <li key={option} >
            <a onClick={handleClick}>{option}</a>
        </li>
    }  )

    return <div className="menu">
        
        <div className={`${sticky ? "desktopMenu sticky" : "desktopMenu"}`}>
            <ul href=" ">
                {renderedElements}
            </ul>
        </div> 

        <div className={`${sticky ? "mobileButton sticky" : "mobileButton"}`}>
            <button onClick={handleClickMobile}>
                <span><IoMenuOutline/> </span>
            </button>
        </div>
        {showMobile && <MobileMenu onClose={handleCloseMobile} menuOptions={renderedElements} />}

    </div>
    
}

export default Navbar;