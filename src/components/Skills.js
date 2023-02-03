import './Skills.css'

function Skills({icon,title,skills}){

    const renderedInfo = skills.skillInfo.map( (skill) => {

        return <div key={skill.name} className='skill'>

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
            <p className='category-title'>{title}</p>
        </div>

        {renderedInfo}


    </div>



}

export default Skills;