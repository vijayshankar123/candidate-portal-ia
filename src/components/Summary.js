import React from 'react'
import {useNavigate} from 'react-router-dom';

//summary component
const Summary = ({candidates,rejectedCandidates,shortlistedCandidates}) => {
    const history = useNavigate()
    const fetchLastCandidate = (from) =>{
        if(from==="shortlist" && shortlistedCandidates.length > 0){
         return candidates.filter(item=>item?.id===shortlistedCandidates[shortlistedCandidates?.length-1])[0]?.name
        }
        if(from==="reject" && rejectedCandidates.length > 0) {
            return candidates.filter(item=>item?.id===rejectedCandidates[rejectedCandidates?.length-1])[0]?.name
        }
        return "--"
    }

    return (
        <div className="summary-container scale-container">
            <div className="summary-header-container">
            <h3 className="summary-header">Summary</h3>
            </div>
            <div className="summary-body">
            <p>Total Candidates shortlisted: <strong>{shortlistedCandidates?.length||0}</strong></p>
            <p>Total Candidates rejected: <strong>{rejectedCandidates?.length||0}</strong></p>
            <p>Last Shortlisted Candidate: <strong>{fetchLastCandidate("shortlist")} </strong></p>
            
            <p>Last Rejected Candidate: <strong>{fetchLastCandidate("reject")}</strong> </p>
            <button className="details-button summary-button-1" onClick={()=>history("/shortlisted")}>Shortlisted Candidates</button>
            <button className="details-button summary-button-2" onClick={()=>history("/rejected")}>Rejected Candidates</button>
            </div>
            
        </div>
    )
}

export default Summary
