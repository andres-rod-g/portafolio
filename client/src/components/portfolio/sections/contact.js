import Styles from '../style.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default () => {
    return (
        <div className="section" style={{backgroundColor: '#222831'}}>
            <div className={Styles.contactSection}>
                <div className={Styles.sectionBlackContent}>
                    <h1>Contact</h1>
                    <p>Email</p>
                    <p>01mwkp@gmail.com</p>
                    <h2>Or</h2>
                    <div className={Styles.buttonContainer}>
                        <button><FontAwesomeIcon icon={faTwitter}/></button>
                        <button><FontAwesomeIcon icon={faLinkedin}/></button>
                        <button><FontAwesomeIcon icon={faInstagram}/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}