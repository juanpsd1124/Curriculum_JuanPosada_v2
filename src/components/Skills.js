import './Skills.css'
import styled, { keyframes } from "styled-components"
// import reactImg from '../images/react.svg'

const per = '80%'

function Skills({icon,skills}){

    const renderedInfo = skills.map( (skill) => {

        return <div className='skill'>

            <div className='skill-info'>
                <p className='skill-name'>{skill.name}</p>
                <p className='skill-percentage'>{skill.percentage}</p>
            </div>
           
            <div className='skill-progress'>
                <span className='percentage' style={{width: skill.percentage }}></span>
            </div>

        </div>

    })


    return <div className='skill-group'>


        <div className='skill-category'>
            {icon}
            <p className='category-title'>Desarrollo web y programacion general</p>
        </div>

        {renderedInfo}


    </div>



}

export default Skills;