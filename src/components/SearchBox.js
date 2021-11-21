import React,{Fragment, useState} from 'react'


// searchbox component
let persistSearch = ""
const SearchBox = ({candidates,persistCandidates,setCandidates}) => {

    const [search,setSearch] = useState(persistSearch)

    const onChangeHandler = (event) =>{
        const name = event?.target.value
        const tempCandidates = [...persistCandidates]
        setCandidates(tempCandidates.filter(item=>item?.name?.toLowerCase().includes(name?.trim()?.toLowerCase())))
        setSearch(name)
        persistSearch = name
    }

    return (
    <Fragment>
        <div className="search-container center-container top-translate">
            <i className="fas fa-search search-icon" />
            <input type="text" onChange={e =>onChangeHandler(e)} value={search} className="search-text" placeholder="Search..."  />
            
        </div>
        {!candidates.length&&
            <h3 style={{margin:"1rem",textAlign:"center"}}>No Candidates Found</h3>
           }
    </Fragment>
    )
}

export default SearchBox
