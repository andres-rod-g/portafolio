import Styles from '../style.module.scss'
import video from '../../../resources/Vid.mp4'

export default () => {
    return (
        <div className={'section ' + Styles.about}>
            <div className='pageBody'>
                <video className='video' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>
                <div className='pageBody'>
                    <div className='itemsContainer'>
                    <h1>Andres Rodriguez</h1>
                    <button onClick={() => console.log('hola')}>Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}