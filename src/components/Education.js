import { forwardRef, useContext } from "react";
import TextSection from "./TextSection";
import Resume from "./Resume";
import LanguageContext from "../context/LanguageContext";
import {FcDiploma2} from 'react-icons/fc';

const Education = forwardRef( (props,ref) => {
    const {text} = useContext(LanguageContext);

    return <div ref={ref} className="experience">
        <TextSection title={text.educationInfo.sectionTitle} paragraph={text.educationInfo.paragraph} />
        <Resume id="experience" iconType={<FcDiploma2/>} title={text.educationInfo.sectionTitle} paragraph={text.educationInfo.paragraph} resumeInfo={text.educationInfo.companiesInfo} />
    </div>

})

export default Education;