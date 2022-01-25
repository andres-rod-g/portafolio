// PHOTO IMPORT
import codePenIcon from '../../../../resources/images/other/codepen.png'
import notelaneIcon from '../../../../resources/images/notelane/NLLogo.png'
import tlbIcon from '../../../../resources/images/TheLittleBird/Logo.png'

//BANNERS AND MORE
import tlbBanner from '../../../../resources/images/TheLittleBird/Banner.png'

const projectLists = [
    {
        title: 'CodePen Projects',
        description: 
        `
        You could find some cool CodePens on Andres' profile.
        `,
        image: codePenIcon,
        bgImage: '',
        fontColor: '#000000',
        bgColor: '#ffffff',
        btnFontColor: '#ffffff',
        btnColor: '#000000',
        github: '',
        url: 'https://codepen.io/_Andres_Rod'
    },
    {
        title: 'Notelane',
        description: 
        `
        Free Note taking App that use Google Auth as it’s authentication system.
        `,
        image: notelaneIcon,
        bgImage: '',
        fontColor: '#ffffff',
        bgColor: '#1E1E24',
        btnFontColor: '#000000',
        btnColor: '#ffffff',
        github: 'https://github.com/andres-rod-g/notelane',
        url: 'https://notelane.herokuapp.com/'
    },
    {
        title: '',
        description: 
        `
        
        `,
        image: '',
        bgImage: tlbBanner,
        fontColor: '#ffffff',
        bgColor: '#251081',
        btnFontColor: '#000000',
        btnColor: '#ffffff',
        github: false,
        url: 'https://justaregularboy.itch.io/the-little-bird'
    },
    {
        title: 'Ohh... This Page too!',
        description: 
        `
        This page was created using some cool libraries. More information on it's GitHub
        `,
        image: '',
        bgImage: '',
        fontColor: '#ffffff',
        bgColor: '#000000',
        btnFontColor: '#000000',
        btnColor: '#ffffff',
        github: 'https://github.com/andres-rod-g/portafolio',
        url: ''
    },
]

export {projectLists}