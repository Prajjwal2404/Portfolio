import Reactjs from '../img/icons/reactjs.js'
import ReactRouter from '../img/icons/reactrouter.js'
import Threejs from '../img/icons/threejs.js'
import Framer from '../img/icons/framer.svg'
import Javascript from '../img/icons/javascript.svg'
import Expressjs from '../img/icons/expressjs.js'
import Php from '../img/icons/php.svg'
import Css from '../img/icons/css.svg'
import Html from '../img/icons/html.svg'
import Python from '../img/icons/python.svg'
import Java from '../img/icons/java.svg'
import MySQL from '../img/icons/mysql.js'
import Mongodb from '../img/icons/mongodb.svg'
import Firebase from '../img/icons/firebase.svg'
import Oatmilk from '../img/projects/oatmilk.webp'
import Translator from '../img/projects/translator.webp'
import ShoeStore from '../img/projects/shoe-store.webp'
import GameStore from '../img/projects/game-store.webp'
import Calculator from '../img/projects/calculator.webp'
import Dashboard from '../img/projects/dashboard.webp'
import { ReactComponent as OatmilkIcon } from '../img/icons/oatmilk.svg'
import { ReactComponent as TranslatorIcon } from '../img/icons/translator.svg'
import { GiRunningShoe } from "react-icons/gi"
import { IoGameController } from "react-icons/io5"
import { ImCalculator } from "react-icons/im"
import { BiSolidDashboard } from "react-icons/bi"

export const about = "I'm Prajjwal Pratap Shah, a web developer currently pursuing an MCA in Applied Machine Learning at UPES Dehradun. I'm passionate about crafting user-friendly websites using ReactJS and other technologies. Welcome to my portfolio!"

export const works = [
    {
        title: 'Oats by Nush',
        description: 'Product and Ecommerce website of Nush Oats Pvt. Ltd.',
        tags: [
            {
                tech: 'ReactJS',
                color: 'turquoise'
            },
            {
                tech: 'Firebase',
                color: 'red'
            },
            {
                tech: 'Framer Motion',
                color: 'hotpink'
            }
        ],
        image: Oatmilk,
        logo: <OatmilkIcon />,
        code_link: 'https://github.com/Prajjwal2404/OatMilk',
        project_link: 'https://oatsbynush.com',
        must_view: true
    },
    {
        title: 'Realtime Translator',
        description: 'Multimodal Real-time Translation web application made using ReactJS',
        tags: [
            {
                tech: 'ReactJS',
                color: 'turquoise'
            },
            {
                tech: 'ExpressJS',
                color: 'mediumseagreen'
            }
        ],
        image: Translator,
        logo: <TranslatorIcon />,
        code_link: 'https://github.com/Prajjwal2404/Translator',
        project_link: 'https://webrealtime-translator.vercel.app'
    },
    {
        title: 'Shoe Store',
        description: 'An Ecommerce website for selling footwear online made using ReactJS.',
        tags: [
            {
                tech: 'ReactJS',
                color: 'turquoise'
            },
            {
                tech: 'JavaScript',
                color: 'gold'
            },
            {
                tech: 'Firestore',
                color: 'red'
            }
        ],
        image: ShoeStore,
        logo: <GiRunningShoe />,
        code_link: 'https://github.com/Prajjwal2404/Shoe-Store',
        project_link: 'https://shoe-store-160b2.firebaseapp.com'
    },
    {
        title: 'Game Store',
        description: 'A digital games selling website made using vanilla HTML, CSS and PHP.',
        tags: [
            {
                tech: 'PHP',
                color: 'violet'
            },
            {
                tech: 'MySQL',
                color: 'orange'
            },
            {
                tech: 'CSS',
                color: 'blue'
            }
        ],
        image: GameStore,
        logo: <IoGameController />,
        code_link: 'https://github.com/Prajjwal2404/Game-Store',
        project_link: 'http://game-store.onlinewebshop.net'
    },
    {
        title: 'Dashboard',
        description: 'A fully responsive UI/UX of a dashboard Page made using ReactJS',
        tags: [
            {
                tech: 'ReactJS',
                color: 'turquoise'
            },
            {
                tech: 'CSS',
                color: 'blue'
            }
        ],
        image: Dashboard,
        logo: <BiSolidDashboard />,
        code_link: 'https://github.com/Prajjwal2404/Dashboard',
        project_link: 'https://webreactdashboard.netlify.app'
    },
    {
        title: 'Scientific Calculator',
        description: 'An android scientific calculator app made in Android Studio',
        tags: [
            {
                tech: 'Android Studio',
                color: 'mediumseagreen'
            },
            {
                tech: 'Java',
                color: 'salmon'
            }
        ],
        image: Calculator,
        logo: <ImCalculator style={{ borderRadius: window.matchMedia('(pointer: coarse)').matches ? '35%' : '0' }} />,
        code_link: 'https://github.com/Prajjwal2404/Calculator',
        project_link: 'https://play.google.com/store/apps/details?id=com.prajjwal.calculator'
    }
]

export const technologies = [
    {
        name: 'ReactJS',
        icon: Reactjs
    },
    {
        name: 'React Router',
        icon: ReactRouter
    },
    {
        name: 'ThreeJS',
        icon: Threejs
    },
    {
        name: 'Framer Motion',
        icon: Framer
    },
    {
        name: 'JavaScript',
        icon: Javascript
    },
    {
        name: 'ExpressJS',
        icon: Expressjs
    },
    {
        name: 'PHP',
        icon: Php
    },
    {
        name: 'CSS',
        icon: Css
    },
    {
        name: 'HTML',
        icon: Html
    },
    {
        name: 'Python',
        icon: Python
    },
    {
        name: 'Java',
        icon: Java
    },
    {
        name: 'MySQL',
        icon: MySQL
    },
    {
        name: 'MongoDB',
        icon: Mongodb
    },
    {
        name: 'Firebase',
        icon: Firebase
    }
]

export const experiences = [
    {
        title: 'Master Of Computer Applications',
        organization: 'University of Petroleum and Energy Studies',
        location: 'Dehradun',
        duration: '08/2024 - 05/2026',
        performance: 'Ongoing',
        skills: 'Machine Learning'
    },
    {
        title: 'Bachelor Of Computer Applications',
        organization: "Savitribai Phule Pune University",
        location: 'Pune',
        duration: '08/2020 - 07/2023',
        performance: 'CGPA - 7.78',
        skills: 'Computer Science'
    },
    {
        title: 'ISC Class XII',
        organization: "St. Francis' College",
        location: 'Lucknow',
        duration: '04/2018 - 05/2019',
        performance: 'Score - 71.5%',
        skills: 'PCM, Computer'
    },
    {
        title: 'ICSE Class X',
        organization: "St. Francis' College",
        location: 'Lucknow',
        duration: '04/2016 - 05/2017',
        performance: 'Score - 85%',
        skills: 'Science, Maths'
    }
]

export const contacts = {
    linkedin: 'https://www.linkedin.com/in/prajjwal2404',
    github: 'https://github.com/Prajjwal2404',
    twitter: 'https://twitter.com/_shhhah_',
    instagram: 'https://www.instagram.com/_.shhhah._',
    phone: '+91\u00A07355491281',
    location: 'Dehradun,\u00A0India\u00A0\u00A0-\u00A0\u00A0248007',
    email: 'Prajjwalpratapshah@outlook.com',
    resumeName: 'Prajjwal_Pratap_Shah_Resume.pdf'
}