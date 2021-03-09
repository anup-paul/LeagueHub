import React from 'react';
import { useHistory } from 'react-router';

const League = (props) => {
    const { strLeagueAlternate, strLeague, idLeague } = props.league;
    const history = useHistory()
    const handleClick = (id) =>
    {
        history.push(`/league/${id}`)
    }
    return (
        <div>
            <div className="card" style={{width: "18rem;"}}>
                <div className="card-body">
                    <h5 className="card-title">{strLeagueAlternate}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{strLeague}</h6>
                    <button onClick={()=>handleClick(idLeague)} >Explore</button>
                </div>
            </div>
        </div>
    );
};

export default League;