import React,{useEffect,useState} from 'react'
import Card from './Card'

const Listing = ({candidates,filterCandidates,title,}) => {

    const [data,setData] = useState([])

    
    useEffect(()=>{
        const shortlistedData = candidates?.filter(item=>filterCandidates?.includes(item?.id))
        setData(shortlistedData)
    },[])

    return (
        <div className="center-container shortlisted-container">
            <h1 className="heading">{title}</h1>
            {data.length>0 ?
              <Card candidates={data}/> :
              <h3>No Candidates Found</h3>
             }
        </div>
    )
}

export default Listing
