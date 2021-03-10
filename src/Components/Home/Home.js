import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import League from '../League/League';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = ("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues((data.leagues).slice(0,15)))
    }, [])

    return (
        <div className="bg-dark">
            <Banner></Banner>
            <div className=" container mt-5">
                <div className="  row">
                    {
                        leagues.map(league => <League league={league} key={league.idLeague} ></League>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;