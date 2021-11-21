import React from 'react'
import { useLocation } from 'react-router';
import {useNavigate} from 'react-router-dom';

//user details
const CandidateDetails = ({candidates,rejectedCandidates,setRejectedCandidates,shortlistedCandidates,setShortlistedCandidates,persistCandidates}) => {
    const {state} = useLocation();
    const history = useNavigate()

  //called when clicked on reject/shortlist button
  const buttonClickHandler = (item,buttonName) =>{
    //shortlist candidate
       if(buttonName==="shortlist"){

           //checking if patient is slready in rejected list
           if(rejectedCandidates.includes(item?.id)){
               let tempIndex = [...rejectedCandidates]
               tempIndex.splice(tempIndex.indexOf(item?.id),1)
               setRejectedCandidates(tempIndex)
           } 
           setShortlistedCandidates([...shortlistedCandidates,item?.id])
       }else{

           //checking if patient is slready in shortlisted list
           if(shortlistedCandidates.includes(item?.id)){
            let tempIndex = [...shortlistedCandidates]
            tempIndex.splice(tempIndex.indexOf(item?.id),1)
            setShortlistedCandidates(tempIndex)
           }  
          setRejectedCandidates([...rejectedCandidates,item?.id])
       }
   history("/")
  }
    return (
        <div className="details-container center-container">
            <div className="details-user-section">
                <img style={{height:"12rem",width:"12rem"}} className="profile-pic" src={state?.Image} alt="profile-pic" />
                <ul className="links-container-2 center-container">
                        <li href="#"><i className="fab fa-linkedin" /> </li>
                        <li href="#"><i className="fab fa-facebook-square" /> </li>
                        <li href="#"><i className="fab fa-twitter-square" /> </li>
                </ul>
                <p style={{fontSize:"3rem",justifyContent:"center"}} className="user-name">{state?.name}</p>
                <p style={{fontSize:"2rem"}} className="user-role">{state?.role}</p>
            </div>
            <div>
            <button className="details-button details-button-1" style={shortlistedCandidates?.includes(state?.id) ? {opacity:0.3,cursor:"not-allowed"}:{}}
            disabled={shortlistedCandidates?.includes(state?.id)} onClick={()=>buttonClickHandler(state,"shortlist")}>Shortlist Candidate</button>
           <button className="details-button details-button-2" style={rejectedCandidates?.includes(state?.id) ? {opacity:0.3,cursor:"not-allowed"}:{}}
            onClick={()=>buttonClickHandler(state,"reject")}  disabled={rejectedCandidates?.includes(state?.id)}>Reject Candidate</button>
            </div>
          
        </div>
    )
}

export default CandidateDetails
