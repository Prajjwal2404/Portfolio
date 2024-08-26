import reactLight from '../img/icons/react-light.svg'
import reactDark from '../img/icons/react-dark.svg'
import threeLight from '../img/icons/threejs-light.svg'
import threeDark from '../img/icons/threejs-dark.svg'
import javascript from '../img/icons/javascript.svg'
import reactRouterLight from '../img/icons/reactrouter-light.svg'
import reactRouterDark from '../img/icons/reactrouter-dark.svg'
import php from '../img/icons/php.svg'
import css from '../img/icons/css.svg'
import html from '../img/icons/html.svg'
import java from '../img/icons/java.svg'
import androidstudio from '../img/icons/androidstudio.svg'
import python from '../img/icons/python.svg'
import mysqlLight from '../img/icons/mysql-light.svg'
import mysqlDark from '../img/icons/mysql-dark.svg'
import mongodb from '../img/icons/mongodb.svg'
import firebase from '../img/icons/firebase.svg'
import oatmilk from '../img/projects/oatmilk.webp'
import shoestore from '../img/projects/shoe-store.webp'
import gamestore from '../img/projects/game-store.webp'
import calculator from '../img/projects/calculator.webp'
import dashboard from '../img/projects/dashboard.webp'
import { ReactComponent as Oatmilk } from '../img/icons/oatmilk.svg'
import { GiRunningShoe } from "react-icons/gi"
import { IoGameController } from "react-icons/io5"
import { ImCalculator } from "react-icons/im"
import { BiSolidDashboard } from "react-icons/bi"

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
                color: 'mediumseagreen'
            }
        ],
        image: oatmilk,
        logo: <Oatmilk />,
        code_link: 'https://github.com/Prajjwal2404/OatMilk',
        project_link: 'https://oatsbynush.com'
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
        image: shoestore,
        logo: <GiRunningShoe />,
        code_link: 'https://github.com/Prajjwal2404/Shoe-Store',
        project_link: 'https://shoe-store-160b2.firebaseapp.com/'
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
        image: gamestore,
        logo: <IoGameController />,
        code_link: 'https://github.com/Prajjwal2404/Game-Store',
        project_link: 'https://webgamestore.000webhostapp.com/'
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
        image: dashboard,
        logo: <BiSolidDashboard />,
        code_link: 'https://github.com/Prajjwal2404/Dashboard',
        project_link: 'https://webreactdashboard.netlify.app/'
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
        image: calculator,
        logo: <ImCalculator style={{ borderRadius: window.matchMedia('(pointer: coarse)').matches ? '35%' : '0' }} />,
        code_link: 'https://github.com/Prajjwal2404/Calculator',
        project_link: 'https://play.google.com/store/apps/details?id=com.prajjwal.calculator'
    }
]

export function technologies(mode) {

    return [
        {
            name: 'ReactJS',
            icon: mode ? reactLight : reactDark
        },
        {
            name: 'React Router',
            icon: mode ? reactRouterLight : reactRouterDark
        },
        {
            name: 'ThreeJS',
            icon: mode ? threeLight : threeDark
        },
        {
            name: 'JavaScript',
            icon: javascript
        },
        {
            name: 'PHP',
            icon: php
        },
        {
            name: 'CSS',
            icon: css
        },
        {
            name: 'HTML',
            icon: html
        },
        {
            name: 'Java',
            icon: java
        },
        {
            name: 'Android Studio',
            icon: androidstudio
        },
        {
            name: 'Python',
            icon: python
        },
        {
            name: 'MySQL',
            icon: mode ? mysqlLight : mysqlDark
        },
        {
            name: 'MongoDB',
            icon: mongodb
        },
        {
            name: 'Firebase',
            icon: firebase
        }
    ]
}

export const experiences = [
    {
        title: 'ICSE Class X',
        organization: "St. Francis' College",
        location: 'Lucknow',
        duration: '04/2016 - 05/2017',
        performance: 'Percentage - 85%',
        skills: 'Science, Mathematics'
    },
    {
        title: 'ISC Class XII',
        organization: "St. Francis' College",
        location: 'Lucknow',
        duration: '04/2018 - 05/2019',
        performance: 'Percentage - 71.5%',
        skills: 'PCM with Computer'
    },
    {
        title: 'Bachelor Of Computer Applications',
        organization: "Savitribai Phule Pune University",
        location: 'Pune',
        duration: '08/2020 - 07/2023',
        performance: 'CGPA - 7.78',
        skills: 'Computer Science'
    }
]