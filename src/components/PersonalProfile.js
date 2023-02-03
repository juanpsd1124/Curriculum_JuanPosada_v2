import './PersonalProfile.css'
import imageSRC from '../images/JuanPosada.jpg'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

function PersonalProfile(){

    const {text} = useContext(LanguageContext);

    return <div className="personalProfile">
    <img src={imageSRC} alt="Juan Posada" ></img>
    <div className='personalProfileInfo'>
        <div className='name-content'>
            <p className='personalProfileInfo name'>{text.personalProfileInfo.name}</p>
        </div>

        <p className='personalProfileInfo position'>{text.personalProfileInfo.position}</p>
        <div className='personalProfileInfo contactInfo'>
            <dl>
                <dt className='contactInfo'>{text.personalProfileInfo.contactInfo.age.title}</dt>
                <dd>{text.personalProfileInfo.contactInfo.age.value}</dd>
                <dt>{text.personalProfileInfo.contactInfo.phone.title}</dt>
                <dd>{text.personalProfileInfo.contactInfo.phone.value}</dd>
                <dt>{text.personalProfileInfo.contactInfo.mail.title}</dt>
                <dd>{text.personalProfileInfo.contactInfo.mail.value}</dd>
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
