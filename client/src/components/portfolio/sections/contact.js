import Styles from '../style.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {motion} from 'framer-motion'

export default () => {
    return (
        <div className="section" style={{backgroundColor: '#222831'}}>
            <motion.div className={Styles.contactSection} initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.5, duration: 0.5}}} viewport={{once: true}}>
                <div className={Styles.sectionBlackContent}>
                    <h1>Contact</h1>
                    <p>Email</p>
                    <p>01mwkp@gmail.com</p>
                    <h2>Or</h2>
                    <div className={Styles.buttonContainer}>
                        <motion.a href='https://twitter.com/_andres_rod' initial={{scale: 1}} whileHover={{scale: 1.125}} whileTap={{scale: 0.9}}><div><FontAwesomeIcon icon={faTwitter}/></div></motion.a>
                        <motion.a href='https://www.linkedin.com/in/andres-felipe-rodr%C3%ADguez-gallego-9055131b0/' target='_blank' initial={{scale: 1}} whileHover={{scale: 1.125}} whileTap={{scale: 0.9}}><div><FontAwesomeIcon icon={faLinkedin}/></div></motion.a>
                        <motion.a href='https://www.instagram.com/_andres_rodr/' target='_blank' initial={{scale: 1}} whileHover={{scale: 1.125}} whileTap={{scale: 0.9}}><div><FontAwesomeIcon icon={faInstagram}/></div></motion.a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}