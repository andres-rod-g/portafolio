import Styles from '../style.module.scss'
import { Carousel } from 'react-carousel-minimal';

import frontEndCert from '../../../resources/certs/fedl.png'
import backEndCert from '../../../resources/certs/beda.png'
import javaScriptCert from '../../../resources/certs/js.png'
import responsiveWebCert from '../../../resources/certs/rwd.png'

const data = [
    {
        image: frontEndCert,
        caption: 'Front End'
    },
    {
        image: backEndCert,
        caption: 'Back End'
    },
    {
        image: javaScriptCert,
        caption: 'JavaScript'
    },
    {
        image: responsiveWebCert,
        caption: 'Responsive Design'
    },
]

export default () => {
    return (
        <div className="section">
            <div className={Styles.sectionContent}>
                <h1>Certs</h1>
                <Carousel
                    data={data}
                />
            </div>
        </div>
    )
}