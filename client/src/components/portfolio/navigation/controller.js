// THIS COMPONENT IS BECAUSE OF THE FULLPAGE JS API, WHICH IS INSIDE THE 'ReactFullpage' COMPONENT AS A PARAM ON THE RENDER.
// WE NEED THE FullPageJS API BECAUSE THERE IS WHERE WE USE IT'S METHODS

export default ({fullpageApi, indexChange, setIndexChange, travelToPage, setTravelToPage}) => {
    if (indexChange === 1) {
        fullpageApi.moveSlideRight()
        setIndexChange(0)
    } else if(indexChange === -1) {
        fullpageApi.moveSlideLeft()
        setIndexChange(0)
    }

    if (travelToPage !== null) {
        fullpageApi.moveTo(travelToPage + 1, 0)
        setTravelToPage(null)
    }

    return (
        <></>
    )
}