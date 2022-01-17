import Styles from '../style.module.scss'

export default () => {
    return (
        <div className="section">
            <div className={Styles.sectionContent}>
                <h1>Knowledge</h1>
                <div className={Styles.row}>
                    <div className={Styles.col}>
                        <h2>HTML</h2>
                        <p>CSS</p>
                        <p>SASS</p>
                        <p>JQuery</p>
                        <p>Boostrap</p>
                        <p>React</p>
                        <p>MUI Material</p>
                    </div>
                    <div className={Styles.col}>
                        <h2>BackEnd</h2>
                        <p>NodeJS</p>
                        <p>Express</p>
                        <p>Cors</p>
                        <p>MongoDB</p>
                        <p>Mongoose</p>
                    </div>
                    <div className={Styles.col}>
                        <h2>Other</h2>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>Redux</p>
                        <p>Axios</p>
                    </div>
                </div>
            </div>
        </div>
    )
}