import React from 'react'
import LeftContainer from '../components/LeftContainer'
import RightContainer from '../components/RightContainer'
import SearchBox from '../components/SearchBox'


const Home = ({candidates,persistCandidates,setCandidates,rejectedCandidates,shortlistedCandidates}) => {
    return (
        <div>
            
            <SearchBox persistCandidates={persistCandidates} candidates={candidates} setCandidates={setCandidates} />
            <div className="center-container space-around-container">
            <LeftContainer rejectedCandidates={rejectedCandidates} shortlistedCandidates={shortlistedCandidates}  
            candidates={candidates}
            />
            <RightContainer candidates={persistCandidates} rejectedCandidates={rejectedCandidates} 
             shortlistedCandidates={shortlistedCandidates}
             />
            </div>

        </div>
    )
}

export default Home
