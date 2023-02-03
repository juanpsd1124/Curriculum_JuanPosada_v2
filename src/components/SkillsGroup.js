import { forwardRef, useContext } from 'react';
import TextSection from "./TextSection";
import Skills from './Skills';
import LanguageContext from '../context/LanguageContext';
import {BsCodeSlash ,BsCpu} from "react-icons/bs";

const SkillGroup = forwardRef( (props,ref) => {
    const {text} = useContext(LanguageContext);

    return <div ref={ref} className='skills'>

        <TextSection title={text.skills.sectionTitle}/>
        <Skills icon={<BsCodeSlash/>} title={text.skills.codingSkills.skillDescription} skills={text.skills.codingSkills} />
        <Skills icon={<BsCpu/>} title={text.skills.hardwareSkills.skillDescription} skills={text.skills.hardwareSkills} />
    </div>

}) 

export default SkillGroup