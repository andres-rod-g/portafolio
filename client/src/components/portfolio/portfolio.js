import Styles from './style.module.scss'
import ReactFullpage from '@fullpage/react-fullpage';

import MainSection from './sections/name'
import About from './sections/about';
import Knowledge from './sections/knowledge';
import Projects from './sections/projects';
import Certs from './sections/certs';
import Contact from './sections/contact';

export default () => {
    return (
        <ReactFullpage
        //fullpage options
            licenseKey = {'YOUR_KEY_HERE'}
            scrollingSpeed = {1000} /* Options here */

            render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                <MainSection/>
                <About/>
                <Knowledge/>
                <Projects/>
                <Certs/>
                <Contact/>
                </ReactFullpage.Wrapper>
            );
            }}
        />
    )
}