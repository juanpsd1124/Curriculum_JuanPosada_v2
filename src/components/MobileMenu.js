import { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import LanguageContext from "../context/LanguageContext";
import './MobileMenu.css';

function MobileMenu( { onClose, menuOptions} ){
    const {handleLanguage} = useContext(LanguageContext);

    return ReactDOM.createPortal(
        <div className="mobile">
            <div onClick={onClose} className="mobileMenuContent fixed"></div>

            <div className="options">
                <ul onClick={onClose} href=" ">
                    {menuOptions}

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