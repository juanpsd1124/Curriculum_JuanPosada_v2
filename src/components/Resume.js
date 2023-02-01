import './Resume.css'
import { FcBriefcase, FcCheckmark } from 'react-icons/fc';
import TextSection from './TextSection';
import { forwardRef } from 'react';


const Resume = forwardRef( ({id, title, text, resumeInfo},ref ) =>{

    const renderedInfo = resumeInfo.map( (resume) => {

        return <div className='timelineBlock' key={resume.companyName} >

            <div className='timelinePoint'><FcCheckmark /></div>
            <div className='timelineContent'>
                <div className="contentBox">
        
                    <div className="date">{resume.dateRange}</div>

                    {/* <div className="date">2022-2020</div> */}

                    <p className="companyName">{resume.companyName}</p>

                    <p className="position">{resume.position}</p>

                    <p className="description">{resume.description}</p>
                </div>
            </div>
        </div>
    });

    return <div ref={ref} key={id} className='resume'>
        <TextSection title={title} text={text}/> 
        {/* <h1 className="title">{title}</h1> */}
        <div className="circle"> <FcBriefcase /></div>
        <div className='timeline'>{renderedInfo}</div>
    </div>

})

export default Resume;



