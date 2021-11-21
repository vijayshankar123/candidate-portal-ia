import React from 'react'
import {useNavigate} from 'react-router-dom';

const Card = ({candidates,shortlistedCandidates=[],rejectedCandidates=[],from="shortlisted"}) => {
    const history = useNavigate();

    // checks if patient is shortlisted/rejected
    const fetchStatus = (item) =>{
      if(shortlistedCandidates.includes(item?.id)) return <span className="badge shortlisted-badge">Shortlisted</span>
      if(rejectedCandidates.includes(item?.id)) return <span className="badge rejected-badge">Rejected</span>
      return ""
    }

    return (
        <div className="left-translate" >
            {candidates&&candidates?.map(item=>(
                <div className="card-container center-container scale-container" key={item?.id} onClick={()=>{
                    history(`/${item?.id}`,{state:item})
                }}>
                  <div className="left-sidebar">
                   <img className="profile-pic" src={item?.Image} alt="profile-pic" />
                   <ul className="links-container center-container">
                       <li href="#"><i className="fab fa-linkedin" /> </li>
                       <li href="#"><i className="fab fa-facebook-square" /> </li>
                       <li href="#"><i className="fab fa-twitter-square" /> </li>
                   </ul>
                   
                  </div>
                  <div className="right-sidebar center-container">
                      <p className="user-name">{item?.name} {from==="home"&&fetchStatus(item)}</p>
                      <p className="user-role">{item?.role}</p>
                  </div>
                </div>
            ))}
        </div>
    )
}

export default Card
