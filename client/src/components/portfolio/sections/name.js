import Styles from '../style.module.scss'
import { motion } from "framer-motion"

const titleVariants = {
    hidden: {opacity: 0, y: -300},
    animated: {opacity: 1, y: 0, transition: {delay: 0.5, duration: 1 }, type: 'spring'}
}

const buttonVariants = {
    hidden: {opacity: 0, y: 300},
    animated: {opacity: 1, y: 0, transition: {delay: 0.5, duration: 1 }}
}

export default ({fullpageApi}) => {
    return (
        <div className={'section ' + Styles.about}>
            <div className='pageBody'>
                <div className='pageBody'>
                    <div className='itemsContainer'>
                    <motion.div whileHover={{rotate: [0, 5, -5, 0], transition: {duration: 0.5}}} initial='hidden' animate='animated' variants={titleVariants}>
                        <h1>Andres Rodriguez</h1>
                    </motion.div>
                    <motion.div initial='hidden' animate='animated' whileHover={{scale: 1.1, transition: {delay: 0, duration: 0.5}}} whileTap={{rotate: [0, 10, -10, 0], transition: {delay: 0, duration: 0.5}}} variants={buttonVariants}>
                        <button onClick={() => fullpageApi.moveTo(2, 0)}>Start</button>
                    </motion.div>
                    </div>
                    <div className={Styles.dividerHomeSVG}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={Styles.nameDivider}></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}