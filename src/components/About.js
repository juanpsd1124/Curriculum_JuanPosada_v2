import { forwardRef, useContext } from "react";
import TextSection from "./TextSection";
import LanguageContext from "../context/LanguageContext";

const About = forwardRef( (props,ref) => {
    const {text} = useContext(LanguageContext);

    return <div ref={ref} className="about">
        <TextSection title={text.aboutMeInfo.sectionTitle} paragraph={text.aboutMeInfo.paragraph} />
    </div>

});


export default About;