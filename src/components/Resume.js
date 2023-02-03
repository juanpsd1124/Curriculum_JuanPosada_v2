import './Resume.css'
import { FcCheckmark } from 'react-icons/fc';
import { forwardRef } from 'react';

const Resume = forwardRef(({ id, iconType, title, paragraph, resumeInfo }, ref) => {

    const renderedInfo = resumeInfo.map((resume) => {

        return <div className='timelineBlock' key={resume.companyName} >

            <div className='timelinePoint'> <FcCheckmark /></div>
            <div className='timelineContent'>
                <div className="contentBox">

                    <div className="date">{resume.dateRange}</div>

                    <p className="companyName">{resume.companyName}</p>

                    <p className="position">{resume.position}</p>

                    <p className="description">{resume.description}</p>
                </div>
            </div>
        </div>
    });

    return <div ref={ref} key={id} className='resume'>
        <div className="circle"> {iconType}</div>
        <div className='timeline'>{renderedInfo}</div>
    </div>
})

export default Resume;



