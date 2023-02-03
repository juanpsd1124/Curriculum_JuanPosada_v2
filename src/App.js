import { useRef } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import 'aos/dist/aos.css'
import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import PersonalProfile from './components/PersonalProfile';
import Experience from './components/Experience';
import Education from './components/Education';
import SkillGroup from './components/SkillsGroup';

function App(){

    // useEffect(() => {
    //     AOS.init({duration:3000});
    // }, [])

    const navRefs = useRef([]);

    const addToRefs = (el) =>{
        if (el && !navRefs.current.includes(el)){
            navRefs.current.push(el)
        }
    }

    return <LanguageProvider >
    
    <div className='App'>
        <div ref={addToRefs} className='header'>
            <Navbar navRefs={navRefs} />
            <div className='container'>
                <PersonalProfile />
            </div>
        </div>
        <div className='container' >
            <About ref={addToRefs} />
            <Experience ref={addToRefs} />
            <Education ref={addToRefs} />
            <SkillGroup ref={addToRefs} />
        </div>
    </div>
    </LanguageProvider>         
}
export default App;