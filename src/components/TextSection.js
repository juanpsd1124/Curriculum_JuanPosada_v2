import './TextSection.css';
import { forwardRef, useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const TextSection = forwardRef( ({id, title, paragraph}, ref) => {
    const{text} = useContext(LanguageContext);

    return <div ref={ref} key={id} className='text-container'>
        <p className="title">{title}</p>
        <p className="paragraph">{paragraph}</p>
    </div>
})

export default TextSection;