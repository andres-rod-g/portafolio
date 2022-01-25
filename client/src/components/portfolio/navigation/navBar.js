import Styles from './style.module.scss'
import { motion, useAnimation } from "framer-motion"
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

import { optionsData } from './MenuOptions'

export default ({isVisible, onWhite, setTravelToPage, selected, toggleActive, setToggleActive}) => {
    const navBarController = useAnimation()

    const [anim, setAnim] = useState(false)

    // ANIMATIONS OF THE NAVBAR WHEN IS ON SCREEN
    if (isVisible) {
        navBarController.start({visibility: 'visible', transition: {delay: 0}})
        navBarController.start({opacity: 1, transition: {duration: 1, delay: 0.5}})
    } else {
        navBarController.start({opacity: 0, transition: {duration: 0.5, delay: 0}})
        navBarController.start({visibility: 'hidden', transition: {delay: 1}})
    }


    // COLOR ANIMATIONS
    if (onWhite) {
        navBarController.start({color: '#000000', transition: {delay: 0.5, duration: 0.5}})
        console.log('OnWhite')
    } else {
        navBarController.start({color: '#ffffff', transition: {delay: 0.5, duration: 0.5}})
        console.log('OnBlack')
    }


    return (
        <nav className='noselect'>
            <motion.div className={Styles.navContainer} initial={{opacity: 0}} animate={navBarController} animStart={() => setAnim(true)} animEnd={() => setAnim(false)}>
                <div>
                    <h1 onClick={() => setTravelToPage(0)}>Andrés Rodríguez</h1>
                </div>
                <ul className={Styles.optionContainer}>
                    {optionsData.map((option, index) => {
                        return (
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <li className={Styles.option} style={isVisible && !anim ? {cursor: 'pointer'} : {cursor: 'auto'}}>
                                    <a onClick={() => isVisible ? setTravelToPage(index) : null}>{option.optionName}</a>
                                    {
                                        selected === index
                                            ? <motion.div initial={{borderTopColor: '#ffffff', borderTopWidth: '1px', borderTopStyle: 'solid', transition: {delay: 0.5, duration: 0.5}}} animate={ !onWhite ? {borderColor: '#ffffff', transition: {delay: 0.5, duration: 0.5}} : {borderColor: '#000000', transition: {delay: 0.5, duration: 0.5}} } layoutId='wakawaka'/>
                                            : null
                                    }
                                </li>
                            </div>

                        )
                    })}
                </ul>
                <motion.div onClick={() => setToggleActive(!toggleActive)} className={Styles.toggleButton}>
                    {!toggleActive
                            ? <motion.div transition={{duration: 0.5}} layoutId='toggle'><FontAwesomeIcon icon={faBars}/></motion.div>
                            : <motion.div transition={{duration: 0.5}} layoutId='toggle'><FontAwesomeIcon icon={faTimes}/></motion.div>
                    }
                </motion.div>
            </motion.div>
        </nav>
    )
}