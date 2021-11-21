import React from 'react'
import Listing from '../components/Listing'


//shortlisted screen
const Shortlisted = ({candidates,shortlistedCandidates}) => {

    return (
        <div>
          <Listing candidates={candidates} filterCandidates={shortlistedCandidates} title={"Shortlisted Candidates"} />
        </div>
    )
}

export default Shortlisted
