import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../Photo/female.png'

const LeagueDetails = () => {
    const {id} = useParams();
    const [leagueDetails, setLeagueDetails] = useState({})
    useEffect(()=>
    {
        const url = (`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeagueDetails(data.leagues[0]))
    },[id])
    console.log(leagueDetails.strGender);
    let gender
    if(leagueDetails.strGender === 'Mixed')
    {
        gender=<h3>Mixed gender</h3>
    }
    else if(leagueDetails.strGender === 'Male')
    {
        gender=<h3>Male Gender</h3>
    }
    else
    {
        gender = <h3>Female Gender</h3>
    }
    return (
        <div>
            <h2>{leagueDetails.strLeague}</h2>
            <h6>Country:{leagueDetails.strCountry}</h6>
            <h6>Founded:{leagueDetails.dateFirstEvent}</h6>
            <h6 >Gender:{leagueDetails.strGender}</h6>
            {
              <p  >{gender}</p>
            }
            <p>{leagueDetails.strDescriptionEN}</p>
        </div>
    );
};

export default LeagueDetails;