import './TextSection.css';
import { forwardRef } from 'react';

const TextSection = forwardRef( ({id, title, text}, ref) => {

    return <div ref={ref} key={id} className='text-container'>
        <p className="title">{title}</p>
        <p className="paragraph">{text}</p>
    </div>
})

export default TextSection;