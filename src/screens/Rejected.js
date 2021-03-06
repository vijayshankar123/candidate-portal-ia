import React from 'react'
import Listing from '../components/Listing'

//rejected screen
const Rejected = ({candidates,rejectedCandidates}) => {

    return (
        <div>
          <Listing candidates={candidates} filterCandidates={rejectedCandidates} title={"Rejected Candidates"} />
        </div>
    )
}

export default Rejected
