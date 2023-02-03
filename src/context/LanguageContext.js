import { createContext, useState } from "react";
import { FcBriefcase, FcDiploma2,} from 'react-icons/fc';

const LanguageContext = createContext();

const initialLanguage = 'en';
const translations = {
    es: {
        navBarOptions: [
            'Inicio',
            'Presentación',
            'Experiencia',
            'Educación',
            'Habilidades'],
        personalProfileInfo: {
            name: 'Juan Posada',
            position: 'Desarrollador Frontend Junior, Ingeniero de hardware',
            contactInfo: {
                age: { title: "Edad", value: "26" },
                phone: { title: "Telefono", value: "+57-301-625-8322" },
                mail: { title: "e-Mail", value: "juanpsd1224@hotmail.com" }
            }
        },
        aboutMeInfo: {
            sectionTitle: 'Presentación',
            paragraph: 'Ingeniero electronico con mas de dos años de experiencia en industria electronica, desarrollo e integracion de hardware con enfasis en IoT. Poseo conocimientos de programacion general, desarrollo web con principales lenguajes de programacion utilizados en la actualidad. Poseo habilidades para diseñar y escribir codigo de calidad utilizando buenas practicas de desarrollo. Soy una persona proactiva, colaborativa y con alta capacidad de auto aprendizaje. '
        },
        experienceInfo: {
            icon: <FcBriefcase />,
            sectionTitle: "Experiencia",
            paragraph: "Experiencia en desarrollo de hardware e integracion de software en empresas de sector energetico y transporte.",
            companiesInfo: [
                {
                    'companyName': 'INPEL SA',
                    'position': 'Hardware Engineer',
                    'dateRange': "2022",
                    'description': "Diseño y desarrollo de hardware para medicion de energia inteligente usando SOC e integracion Linux en sistemas embebidos con microprocesadores NXP con entorno de desarrollo Yocto."
                },
                {
                    'companyName': 'Geotech Solutions',
                    'position': 'Analista I+D+I',
                    'dateRange': "2020-2022",
                    'description': "Desarrollo e integracion de hardware monitoreo vehicular GPS a plataforma de monitoreo vehicular."
                },
                {
                    'companyName': 'Alutrafic LED',
                    'position': 'Auxiliar de Garantias',
                    'dateRange': "2019",
                    'description': "Revisión, ensamble y reparacion de luminarias LED. Redaccion informes referentes a garantias"
                }]
        },
        educationInfo: {
            icon: <FcDiploma2 />,
            sectionTitle: "Educación",
            paragraph: "Formacion profesional y tecnologica de calidad continuamente actualizada con cursos complementarios y auto aprendizaje.",
            companiesInfo: [
                {
                    'companyName': 'Universidad Nacional de Colombia - Ministerio TIC',
                    'position': 'Formación general en habilidades de programación con profundización en desarrollo de aplicaciones web',
                    'dateRange': "2021",
                    'description': ""
                },
                {
                    'companyName': 'Universidad Autónoma del Caribe',
                    'position': 'Ingeniería Electrónica y Telecomunicaciones',
                    'dateRange': "2014-2022",
                    'description': "Matrícula Profesional AT295-148732 "
                },
                {
                    'companyName': 'Servicio Nacional de Aprendizaje - SENA',
                    'position': 'Diseño e Integración de Automatismos Mecatrónicos',
                    'dateRange': "2018-2020",
                    'description': ""
                }]
        },
        skills: {
            sectionTitle: 'Skills',
            codingSkills: {
                skillDescription: 'Desarrollo web y programacion general',
                skillInfo: [
                    {
                        name: 'React JS',
                        percentage: '40%'
                    },
                    {
                        name: 'Javascript',
                        percentage: '50%'
                    },
                    {
                        name: 'HTML',
                        percentage: '50%'
                    },
                    {
                        name: 'CSS',
                        percentage: '50%'
                    },
                    {
                        name: 'Python',
                        percentage: '40%'
                    },
                    {
                        name: 'SQL',
                        percentage: '30%'
                    },
                    {
                        name: 'Git',
                        percentage: '30%'
                    },
                    {
                        name: 'Amazon Web Services',
                        percentage: '20%'
                    }
                ],
            },
            hardwareSkills: {
                skillDescription: 'Diseño Hardware',
                skillInfo: [
                    {
                        name: 'Diseño PCB',
                        percentage: '60%'
                    },
                    {
                        name: 'Integracion MCAD/ECAD',
                        percentage: '40%'
                    },
                    {
                        name: 'Microcontroladores',
                        percentage: '40%'
                    },
                    {
                        name: 'Montaje Componentes SMD/THT',
                        percentage: '80%'
                    }
                ]
            }
        }
    },
    en: {
        navBarOptions: [
            'Home',
            'About Me',
            'Experience',
            'Education',
            'Skills'],
        personalProfileInfo: {
            name: 'Juan Posada',
            position: 'FrontEnd Jr Developer, Hardware Engineer',
            contactInfo: {
                age: { title: "Age", value: "26" },
                phone: { title: "Phone", value: "+57-301-625-8322" },
                mail: { title: "e-Mail", value: "juanpsd1224@hotmail.com" }
            }
        },
        aboutMeInfo: {
            sectionTitle: 'About Me',
            paragraph: 'Electronic engineer with-in two years of experience in electronic industry, hardware development and integration oriented on Internet of Things (IoT). Skilled at web development, general programming using trending programming languages and best coding practices. Proactive and collaborative worker with fast learning capability.'
        },
        experienceInfo: {
            icon: <FcBriefcase />,
            sectionTitle: "Experience",
            paragraph: "Experience on hardware development and software integration on energy and transportation sector enterprises.",
            companiesInfo: [
                {
                    'companyName': 'INPEL SA',
                    'position': 'Hardware Engineer',
                    'dateRange': "2022",
                    'description': "Hardware design and development for smart metering and management energy implementing SOC, Linux distros for embedded systems using Yocto Project toolset."
                },
                {
                    'companyName': 'Geotech Solutions',
                    'position': 'R&D Analyst',
                    'dateRange': "2020-2022",
                    'description': "Hardware development and software integration, testing for vehicle GNSS satellite monitoring devices."
                },
                {
                    'companyName': 'Alutrafic LED',
                    'position': 'Warranty Assistant',
                    'dateRange': "2019",
                    'description': "Inspection, assembly and street lighting LED luminaries repair. Inspection report writing."
                }]

        },
        educationInfo: {
            icon: <FcDiploma2 />,
            sectionTitle: "Education",
            paragraph: "Professional and technological quality career training continuously updated with complementary courses and self learning.",
            companiesInfo: [
                {
                    'companyName': 'Universidad Nacional de Colombia - Ministerio TIC',
                    'position': 'General programming skills course with deepning on web applications development.',
                    'dateRange': "2021",
                    'description': ""
                },
                {
                    'companyName': 'Universidad Autónoma del Caribe',
                    'position': 'Electronic and Communications engineering degree',
                    'dateRange': "2014-2020",
                    'description': "Profesional ID: AT295-148732"
                },
                {
                    'companyName': 'Servicio Nacional de Aprendizaje - SENA',
                    'position': 'Mechatronic and Automation technological degree',
                    'dateRange': "2018-2020",
                    'description': ""
                }]
        },
        skills: {
            sectionTitle: 'Skills',
            codingSkills: {
                skillDescription: 'Web Development - General Programming',
                skillInfo: [
                    {
                        name: 'React JS',
                        percentage: '40%'
                    },
                    {
                        name: 'Javascript',
                        percentage: '50%'
                    },
                    {
                        name: 'HTML',
                        percentage: '50%'
                    },
                    {
                        name: 'CSS',
                        percentage: '50%'
                    },
                    {
                        name: 'Python',
                        percentage: '40%'
                    },
                    {
                        name: 'SQL',
                        percentage: '30%'
                    },
                    {
                        name: 'Git',
                        percentage: '30%'
                    },
                    {
                        name: 'Amazon Web Services',
                        percentage: '20%'
                    }
                ],
            },
            hardwareSkills: {
                skillDescription: 'Hardware Design',
                skillInfo: [
                    {
                        name: 'PCB Design',
                        percentage: '60%'
                    },
                    {
                        name: 'MCAD/ECAD Integration',
                        percentage: '40%'
                    },
                    {
                        name: 'Microcontrollers',
                        percentage: '40%'
                    },
                    {
                        name: 'SMD/THT Component Mounting',
                        percentage: '80%'
                    }
                ]
            }
        }
    }
}

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [text, setTexts] = useState(translations[language]);

    const handleLanguage = (language) => { 
        if(language === 'en'){
            setLanguage('en');
            setTexts(translations.en);
        }else{
            setLanguage('es');
            setTexts(translations.es);
        }
    }

    const data={text,handleLanguage}
    return <LanguageContext.Provider value={data} test={text}>{children}</LanguageContext.Provider>
}

export {LanguageProvider, translations};

export default LanguageContext;
