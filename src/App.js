import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './App.css'
import Typing from './components/Typing';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import PersonalProfile from './components/PersonalProfile';
import Resume from './components/Resume'
import TextSection from './components/TextSection';
import Skills from './components/Skills';
import {BsCodeSlash} from "react-icons/bs";

const aboutInfo ={
    'title': 'Presentación',
    'text': 'Ingeniero electronico con mas de dos años de experiencia en industria electronica, desarrollo e integracion de hardware con enfasis en IoT. Poseo conocimientos de programacion general, desarrollo web con principales lenguajes de programacion utilizados en la actualidad. Poseo habilidades para diseñar y escribir codigo de calidad utilizando buenas practicas de desarrollo. Soy una persona proactiva, colaborativa y con alta capacidad de auto aprendizaje. '
}

const resumeTextInfo={
    'title': 'Experiencia',
    'text': 'Experiencia en desarrollo de hardware e integracion de software en empresas de sector energetico y transporte.'
}

const resumeInfo = [
    {   'companyName': 'INPEL SA',
        'position': 'Hardware Engineer',
        'dateRange': "2022",
        'description': "Diseño y desarrollo de hardware para medicion de energia inteligente usando SOC e integracion Linux en sistemas embebidos con microprocesadores NXP con entorno de desarrollo Yocto."
    },
    {   'companyName':  'Geotech Solutions',
        'position':     'R&D Analyst',
        'dateRange':    "2022-2022",
        'description':  "Desarrollo e integracion de hardware monitoreo vehicular GPS a plataforma de monitoreo vehicular"
    },
    {   'companyName':  'Alutrafic LED',
        'position':     'technician',
        'dateRange':    "2019",
        'description':  "Revisión, ensamble y reparacion de luminarias LED. Redaccion informes referentes a garantias"
    },
] 

const educationTextInfo ={
    'title': 'Educación',
    'text': 'Formacion profesional y tecnologica de calidad continuamente actualizada con cursos complementarios y auto aprendizaje.'
}

const educationInfo = [
    {   'companyName': 'Universidad Nacional de Colombia - Ministerio TIC',
        'position': 'Formación general en habilidades de programación con profundización en desarrollo de aplicaciones web',
        'dateRange': "2021",
        'description': ""
    },
    {   'companyName':  'Universidad Autónoma del Caribe',
        'position':     'Ingeniería Electrónica y Telecomunicaciones',
        'dateRange':    "2014-2022",
        'description':  "Matrícula Profesional AT295-148732 "
    },
    {   'companyName':  'Servicio Nacional de Aprendizaje - SENA',
        'position':     'Diseño e Integración de Automatismos Mecatrónicos',
        'dateRange':    "2018-2020",
        'description':  ""
    }
]

const codingskills = [
    {name:'React JS',
     percentage:'80%'},
    {name:'Javascript',
     percentage:'50%'},
    {name:'HTML',
     percentage:'50%'},
    {name:'CSS',
     percentage:'40%'},
     {name:'Python',
     percentage:'40%'},
     {name:'SQL',
     percentage:'40%'},
     {name:'Git',
     percentage:'40%'},
     {name:'Amazon Web Services',
     percentage:'40%'},
]

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

    return <div className='App'>

        <div className='header'>

        <Navbar navRefs={navRefs} menuOptions={
            [   'Inicio',
                'Presentación',
                'Experiencia',
                'Educación',
                'Habilidades',
            ]
        } />

            <div className='container'>
                <PersonalProfile />
            </div>
        </div>

        <div className='container' >

            <TextSection ref={addToRefs} id='AboutMe' title={aboutInfo.title} text={aboutInfo.text} />

            <Resume ref={addToRefs} id='resume88' title={resumeTextInfo.title} text={resumeTextInfo.text} resumeInfo={resumeInfo} />

            <Resume ref={addToRefs} id='education' title={educationTextInfo.title} text={educationTextInfo.text} resumeInfo={educationInfo} />

            <div ref={addToRefs} className='skills'>

                <h1 className='skills-title'>Habilidades</h1>

                <Skills icon={<BsCodeSlash />} skills={codingskills} />

            </div>

        </div>

    </div>


            
}

export default App;