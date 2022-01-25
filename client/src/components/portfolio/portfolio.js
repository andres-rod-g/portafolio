import Styles from './style.module.scss'
import ReactFullpage from '@fullpage/react-fullpage';
import { useState } from 'react';

//NAVIGATION
import Controller from './navigation/controller'
import NavBar from './navigation/navBar'
import RightArrow from './navigation/rightArrow'
import LeftArrow from './navigation/leftArrow'

// SECTIONS
import MainSection from './sections/name'
import About from './sections/about';
import Knowledge from './sections/knowledge';
import Projects from './sections/projects';
import Certs from './sections/certs';
import Contact from './sections/contact';


export default () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [indexChange, setIndexChange] = useState(0)
    const [travelToPage, setTravelToPage] = useState(null)
    const [toggleActive, setToggleActive] = useState(false)

    const onLeave = (origin, destination, direction) => {
        setCurrentPage(destination.index)
    } 
    
    return (
        <div>
            <NavBar 
                isVisible={currentPage === 0 ? false : true} 
                onWhite={currentPage === 2 ? true : false}
                setTravelToPage={setTravelToPage}
                selected={currentPage}
                setToggleActive={setToggleActive}
                toggleActive={toggleActive}
            />
            <RightArrow setIndexChange={setIndexChange} indexChange={indexChange} isVisible={currentPage === 3 ? true : false}/>
            <LeftArrow setIndexChange={setIndexChange} indexChange={indexChange} isVisible={currentPage === 3 ? true : false}/>
            <ReactFullpage
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */
                onLeave={onLeave.bind(this)}
                render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <Controller 
                            fullpageApi={fullpageApi} 
                            indexChange={indexChange} 
                            setIndexChange={setIndexChange}
                            travelToPage={travelToPage}
                            setTravelToPage={setTravelToPage}
                        />
                        <MainSection fullpageApi={fullpageApi}/>
                        <About/>
                        <Knowledge/>
                        <Projects/>
                        <Certs/>
                        <Contact/>
                    </ReactFullpage.Wrapper>
                );
                }}
            />
        </div>
    )
}