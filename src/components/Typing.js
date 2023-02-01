import className from 'classnames'
import './Typing.css'

function Typing({
    id,
    staticText,
    typingText,
    textMedium,
    textLarge
}){

    console.log({id})
    const classes = className( 
        {
            
            'typing textMedium': textMedium,
            'typing textLarge': textLarge
        }
        
    )


    return <div id={id} className= {classes}>
        <span className='text first-text'>{staticText}</span>
        <span className="text sec-text">{typingText}</span>
    </div>
}

export default Typing;