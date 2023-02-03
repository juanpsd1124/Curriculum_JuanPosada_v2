import { useState, useEffect, forwardRef, useContext } from 'react';
import MobileMenu from './MobileMenu';
import './Navbar.css';
import { IoMenuOutline } from "react-icons/io5";
import "../../node_modules/flag-icons-svg/css/flag-icons.css";
import LanguageContext from '../context/LanguageContext';

const Navbar = forwardRef( ({navRefs},ref) => {
    const{ text, handleLanguage } = useContext(LanguageContext);
    const [sticky, setSticky] = useState(false);
    const [showMobile, setShowMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleClickMobile = () => {
        setShowMobile(true);
        window.scrollTo(0, 0)
    };

    const handleCloseMobile = () => {
        setShowMobile(false)
    }

    const renderedElements = text.navBarOptions.map((option, index) => {

         function scrolltoTargetAdjusted(homeScroll) {
            var headerOffset = window.scrollY === 0 ? 180 : 84
            var elementPosition = navRefs.current[index].getBoundingClientRect().top;
          var offsetPosition = elementPosition + window.scrollY - headerOffset;
        
            window.scrollTo({
                top: index === 0 ? 0 : offsetPosition,
                behavior: 'smooth'
            })
        }

        const handleClick = () => {
            scrolltoTargetAdjusted();
        } 
        
        return <li key={option} >
            <a onClick={handleClick} href="#!" >{option}</a>
        </li>
    })

    return <div ref={ref} className="menu">

        <div className={`${sticky ? "desktopMenu sticky" : "desktopMenu"}`}>
            <ul href=" ">
                {renderedElements}
                <ul className='language-switcher'>
                    <li id='en' onClick={() => handleLanguage('en')} className='language-option'>
                        <a href="#!">
                            <span className="flag-icon flag-icon-us"></span>
                        </a>
                        <p>English Version</p>
                    </li>
                    <li id='es' onClick={() => handleLanguage('es')} className='language-option'>
                        <a href="#!">
                            <span className="flag-icon flag-icon-es"></span>
                        </a>
                        <p>Version en español</p>
                    </li>
                </ul>
            </ul>
        </div>

    <div className={`${sticky ? "mobileButton sticky" : "mobileButton"}`}>
        <button onClick={handleClickMobile} >
            <span><IoMenuOutline /> </span>
        </button>
    </div>

    {showMobile && <MobileMenu onClose={handleCloseMobile} menuOptions={renderedElements} />}


    {/* //     <div className={`${sticky ? "mobileButton sticky" : "mobileButton"}`}>
    //         <button onClick={handleClickMobile()}>
    //             <span><IoMenuOutline /> </span>
    //         </button>
    //     </div>
    //     {showMobile && <MobileMenu onClose={handleCloseMobile} menuOptions={renderedElements} />} */}

    </div>

});



export default Navbar;