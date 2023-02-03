import { forwardRef, useContext } from "react";
import TextSection from "./TextSection";
import Resume from "./Resume";
import LanguageContext from "../context/LanguageContext";
import { FcBriefcase} from 'react-icons/fc';

const Experience = forwardRef( (props,ref) => {
    const {text} = useContext(LanguageContext);

    return <div ref={ref} className="experience">
        <TextSection title={text.experienceInfo.sectionTitle} paragraph={text.experienceInfo.paragraph} />
        <Resume iconType={<FcBriefcase/>} title={text.experienceInfo.sectionTitle} paragraph={text.experienceInfo.paragraph} resumeInfo={text.experienceInfo.companiesInfo} />
    </div>

})

export default Experience;