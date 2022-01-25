import Styles from './style.module.scss'
import { projectLists } from "./data"
import { motion } from 'framer-motion'


const Card = ({title, description, image, bgImage, bgColor, btnFontColor, btnColor, fontColor, github, url}) => {
    return (
        <motion.div className={Styles.card} initial={{scale: 1}} whileHover={{scale: 1.025, transition: {duration: 0.25}}} style={bgImage ? {background: `url(${bgImage}) no-repeat center center`, backgroundSize: 'cover', color: fontColor} : {backgroundColor: bgColor, color: fontColor}}>
            <div className={Styles.cardContent}>
                <div className={Styles.title}>
                    {
                        image
                            ? <img src={image} alt='projectImg'/>
                            : null
                    }
                    <h1>{title}</h1>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <div className={Styles.buttons}>
                {
                    url
                        ? <motion.a initial={{borderRadius: '16px'}} whileHover={{borderRadius: '30px', scale: 1.1}} whileTap={{borderRadius: '10px', scale: 0.9}} href={url} target='_blank' style={{backgroundColor: btnColor, color: btnFontColor}}><p>Visit Page</p></motion.a>
                        : null
                }
                
                {
                    github
                        ? <motion.a initial={{borderRadius: '16px'}} whileHover={{borderRadius: '30px', scale: 1.1}} whileTap={{borderRadius: '10px', scale: 0.9}} href={github} target='_blank' style={{backgroundColor: '#24292E', color: '#ffffff'}}><p>GitHub</p></motion.a>
                        : null
                }
                
            </div>
        </motion.div>
    )
}

export default () => {
    return (
        <>
            {
                projectLists.map(project => {
                    return(
                        <div className='slide' style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                            <Card {...project}/>
                        </div>
                    )
                })
            }
        </>
    )
}