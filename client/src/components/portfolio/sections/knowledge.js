import Styles from '../style.module.scss'
import { motion } from "framer-motion"

const cVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 1.5,
            delay: 1
        }
    }
}

const eVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
        }
    }
}

export default () => {
    return (
        <div className="section" style={{backgroundColor: '#DDDDDD'}}>
            <div className={Styles.sectionContent} >
                <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 0.25, duration: 1}}} viewport={{once: true}}>
                    <h1>Knowledge</h1>
                </motion.div>
                <div className={Styles.row}>
                    <motion.div initial='hidden' whileInView='show' variants={cVariants} className={Styles.col} viewport={{once: true}}>
                        <h2>FrontEnd</h2>

                        <motion.p variants={eVariants}>HTML</motion.p>
                        <motion.p variants={eVariants}>CSS</motion.p>
                        <motion.p variants={eVariants}>SASS</motion.p>
                        <motion.p variants={eVariants}>JQuery</motion.p>
                        <motion.p variants={eVariants}>Boostrap</motion.p>
                        <motion.p variants={eVariants}>React</motion.p>
                        <motion.p variants={eVariants}>Motion</motion.p>
                    </motion.div>
                    <motion.div initial='hidden' whileInView='show' variants={cVariants} className={Styles.col} viewport={{once: true}}>
                        <h2>BackEnd</h2>

                        <motion.p variants={eVariants}>NodeJS</motion.p>
                        <motion.p variants={eVariants}>Express</motion.p>
                        <motion.p variants={eVariants}>Cors</motion.p>
                        <motion.p variants={eVariants}>MongoDB</motion.p>
                        <motion.p variants={eVariants}>Mongoose</motion.p>
                    </motion.div>
                    <motion.div initial='hidden' whileInView='show' variants={cVariants} className={Styles.col} viewport={{once: true}}>
                        <h2>Other</h2>

                        <motion.p variants={eVariants}>Git</motion.p>
                        <motion.p variants={eVariants}>GitHub</motion.p>
                        <motion.p variants={eVariants}>Redux</motion.p>
                        <motion.p variants={eVariants}>Axios</motion.p>
                    </motion.div>
                </div>
                <div className={Styles.currentlyLearning}>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, transition: {delay: 5}}} viewport={{once: true}}>
                        <p style={{fontFamily: 'Urbanist', fontSize: '25px'}}>I'm currently learning</p>
                    </motion.div>
                    <motion.div initial={{opacity: 0, filter: 'blur(15px)',}} animate={{rotate: [0, 10, -10, 0], filter: 'blur(0px)', transition: {duration: 0.8, repeat: Infinity, repeatDelay: 2}}} whileInView={{opacity: 1, filter: 'blur(0px)', transition: {delay: 5, duration: 0.8}}} whileHover={{rotate: [0, 0, 10, -10, 0], transition: {duration: 0.8}}} viewport={{once: true}}>
                        <p style={{fontFamily: 'Vampiro', fontSize: '25px'}}>Remix.Run</p>
                    </motion.div>
                </div>
            </div>
            <div className={Styles.dividerKnowledgeSVG}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={Styles.knowledgeDivider}></path>
                </svg>
            </div>
        </div>
    )
}