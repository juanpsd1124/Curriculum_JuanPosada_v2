import ReactDOM from "react-dom";
import './MobileMenu.css';

function MobileMenu( { onClose, menuOptions} ){
    console.log("Displaying Mobile Menu")
    return ReactDOM.createPortal(
        <div className="mobile">
            <div onClick={onClose} className="mobileMenuContent"></div>

            <div className="options">
                <ul onClick={onClose} href=" ">
                    {menuOptions}
                </ul>
            </div>
        </div>
        ,document.querySelector('.mobileMenu')
    );
    
}

export default MobileMenu;