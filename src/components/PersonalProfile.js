import './PersonalProfile.css'
import imageSRC from '../images/JuanPosada.jpg'
import { BsLinkedin, BsGithub } from "react-icons/bs";

function PersonalProfile(){

    return <div className="personalProfile">
    <img src={imageSRC} alt="Juan Posada" ></img>
    <div className='personalProfileInfo'>
        <div className='name-content'>
            <p className='personalProfileInfo name'>Juan Posada</p>
        </div>

        <p className='personalProfileInfo position'>Desarrollador Frontend Junior, Ingeniero de hardware</p>
        <div className='personalProfileInfo contactInfo'>
            <dl>
                <dt className='contactInfo'>Edad</dt>
                <dd>26</dd>
                <dt>Telefono</dt>
                <dd>+57-301-625-8322</dd>
                <dt>e-Mail</dt>
                <dd>juanpsd1224@hotmail.com</dd>
            </dl>

            <div className='social-network-bar'>
                <a className='social' href='https://www.linkedin.com/in/jposada1224/'><BsLinkedin /></a>
                <a className='social' href='https://github.com/juanpsd1124'><BsGithub /></a>
            </div>
        </div>
    </div>
</div> 

        

    
    
    
    
    
    
        
}

export default PersonalProfile;
