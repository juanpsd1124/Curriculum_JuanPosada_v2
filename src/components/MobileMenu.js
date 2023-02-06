import { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import LanguageContext from "../context/LanguageContext";
import './MobileMenu.css';

function MobileMenu( { onClose, navRefs, menuOptions} ){

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])

    const {text, handleLanguage} = useContext(LanguageContext);

    const renderedElements = text.navBarOptions.map((option, index) => {

        function scrolltoTargetAdjustedMobile() {
            console.log("scroll mobile")
            let headerOffset = window.scrollY === 0 ? 100 : 60;
            let elementPosition = navRefs.current[index].getBoundingClientRect().top;
            let offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: index === 0 ? 0 : offsetPosition,
                behavior: 'smooth'
            });
        };

        const handleClick = () => {
            scrolltoTargetAdjustedMobile();
        };
        
        return <li key={option}>
            <a onClick={handleClick} href="#!" >{option}</a>
        </li>
    });

    return ReactDOM.createPortal(
        <div className="mobile">
            <div onClick={onClose} className="mobileMenuContent fixed"></div>

            <div className="options fixed">
                <ul onClick={onClose} href=" " className="fixed">
                    {/* {menuOptions} */}
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
        </div>
        ,document.querySelector('.mobileMenu')
    );
}

export default MobileMenu;