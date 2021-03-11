// import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { useState } from 'react/cjs/react.development';

const League = (props) => {
    const { strLeagueAlternate, strLeague, idLeague } = props.league;
    // const [details, setDetails] = useState([]);
    // console.log(details);
    const history = useHistory()
    const handleClick = (id) => {
        history.push(`/league/${id}`)
    }
    // useEffect(()=>
    // {
    //     const url = (`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setDetails(data.leagues))
    // }, [idLeague])
    return (
        
            <div className="col-md-4 text-center" >
                <div className="card cardDesign" style={{ width: "18rem", height: "300px", marginBottom: "30px",marginTop:"30px",backgroundColor:"steelblue" }}>
                   {/* {
                       details.map(details => <img src={details.strLogo}alt=""/>)
                   } */}
                    
                    <div className="card-body ">
                        <h5 className="card-title">{strLeagueAlternate}</h5>
                        <h6 className="card-subtitle mb-2 text-dark">{strLeague}</h6>
                        <br/>
                        <br/>
                        <button className="btn btn-warning" onClick={() => handleClick(idLeague)} >
                            Explore
                            <FontAwesomeIcon icon = {faArrowRight}/>    
                        </button>
                    </div>
                </div>
            </div>
        
    );
};

export default League;