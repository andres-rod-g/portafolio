import Styles from './style.module.scss'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimation } from 'framer-motion'

export default ({isVisible, indexChange, setIndexChange}) => {
    const controls = useAnimation()

    if (isVisible) {
        controls.start({opacity: 1, transition: {duration: 0.5, delay: 0.5}, cursor: 'pointer'})
    } else {
        controls.start({opacity: 0, transition: {duration: 0.5, delay: 0}, cursor: 'auto', boxShadow: '4px solid #00000045'})
    }

    const clickButton = () => {
        if (isVisible && (indexChange === 0)) {
            setIndexChange(-1)
        }
    }

    return (
        <motion.div initial={{opacity: 0}} animate={controls} className={`${Styles.arrow} ${Styles.arrowLeft}`} onClick={clickButton}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </motion.div>
    )
}