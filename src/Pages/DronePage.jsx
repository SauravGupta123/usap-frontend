import React from 'react'
import Comp1 from '../Components/ResearchPages/DronePage/Comp1'
import UnderConstruction from '../Components/UnderConstruction'
import NavBar from '../Components/HomePageComponents/NavBar'
import Footer from '../Components/HomePageComponents/Footer'
import Comp2 from '../Components/ResearchPages/DronePage/Comp2'
import Comp3 from '../Components/ResearchPages/DronePage/Comp3'
import Comp4 from '../Components/ResearchPages/DronePage/Comp4'

function DronePage() {
    return (
        <>
            
            <NavBar />
            <Comp1 />
            <Comp2 />
            <Comp3 />
            <Comp4 />
            {/* <Footer /> */}
        </>

    )
}

export default DronePage