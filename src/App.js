import './App.css';
import CandidateDetails from './screens/CandidateDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import React,{useState,useEffect} from "react"
import { fetchCandidate } from './utils/urls';
import { jobRoles } from './utils/constants';
import Shortlisted from './screens/Shortlisted';
import Rejected from './screens/Rejected';
import Navbar from './components/Navbar';



function App() {
  const [candidates,setCandidates] = useState([])
  const [persistCandidates,setPersistCandidates] = useState([])
  const [rejectedCandidates,setRejectedCandidates] = useState([])
  const [shortlistedCandidates,setShortlistedCandidates] = useState([])

  const fetchCandidates = async() =>{
      const res = await fetch(fetchCandidate)
      const data  = await res.json()
      if(res?.status===200){
          setCandidates(data)
      }
  }

  //fetch candidates 
  useEffect(()=>{
      fetchCandidates()
  },[])

  //adding another parameter to the received array -  role (just to display in UI)
  //adding shortlised and rejected parameters
  useEffect(()=>{
  if(candidates?.length>0  && !("role" in candidates[0])){
      const modifiedCandidates = candidates.map((item,index)=>{
          //if odd, add 1st item from jobroles array
          if(index & 1===1) return {...item,role:jobRoles[0]}
           return {...item,role :jobRoles[1]}
      })
        setCandidates(modifiedCandidates)
        setPersistCandidates(modifiedCandidates)
  }
  },[candidates])

  return (
    <div>
      <Router>
      <div>
        <Navbar />
        <Routes >
        <Route exact path="/" element={<Home candidates={candidates} persistCandidates={persistCandidates} setCandidates={setCandidates} 
        rejectedCandidates={rejectedCandidates} shortlistedCandidates ={shortlistedCandidates} 
        />} />
         <Route exact path="/shortlisted" element={<Shortlisted candidates={persistCandidates} shortlistedCandidates={shortlistedCandidates}  />} />
         <Route exact path="/rejected" element={<Rejected candidates={persistCandidates} rejectedCandidates={rejectedCandidates}  />} />
         <Route exact path="/:id" element={<CandidateDetails persistCandidates={persistCandidates}  candidates={candidates}
        shortlistedCandidates ={shortlistedCandidates} setShortlistedCandidates = {setShortlistedCandidates}
        rejectedCandidates = {rejectedCandidates} setRejectedCandidates = {setRejectedCandidates}
        
        />}/>
        {/* <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} /> */}
        </Routes>
       
      </div>
    </Router>
    </div>
  );
}

export default App;
