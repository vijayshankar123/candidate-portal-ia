import React from 'react'
import Card from './Card'

const LeftContainer = ({candidates,rejectedCandidates,shortlistedCandidates}) => {
    return (
        <div>
            {/* card component */}
            <Card candidates={candidates} rejectedCandidates={rejectedCandidates} shortlistedCandidates={shortlistedCandidates}
             from={"home"}/>
        </div>
    )
}

export default LeftContainer
