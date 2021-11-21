import React from 'react'
import Summary from './Summary'

const RightContainer = ({candidates,shortlistedCandidates,rejectedCandidates}) => {
    return (
        <div className="right-translate">
         <Summary shortlistedCandidates={shortlistedCandidates} rejectedCandidates={rejectedCandidates} candidates={candidates} />  
        </div>
    )
}

export default RightContainer
