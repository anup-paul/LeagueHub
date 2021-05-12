import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import femaleImage from '../../Photo/female.png';
import maleImage from '../../Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCrosshairs, faFutbol, faGlobe, faMars } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../Photo/Facebook-logo.png';
import youTube from '../../Photo/images.png';
import twitter from '../../Photo/twitter_circle-512.png';
import banner from '../../Photo/istockphoto-1270541371-1024x1024.jpg'
import './LeagueDetails.css';

const LeagueDetails = () => {
    const { id } = useParams();
    const [leagueDetails, setLeagueDetails] = useState({})
    useEffect(() => {
        const url = (`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`);
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagueDetails(data.leagues[0]))
    }, [id])
    return (
        <div className="backgroundDesign">
            <div className="bannerDesign d-flex justify-content-center">
                <img  src={leagueDetails.strLogo} alt="" />
            </div>

            <div className="details-container text-white ">
                <div className="d-flex align-items-center justify-content-between bg-primary card-design">
                    <div class="card-body">
                        <h2>{leagueDetails.strLeague}</h2>
                        <h6><FontAwesomeIcon icon={faCrosshairs}/>  FoundedYear: {leagueDetails.intFormedYear}</h6>
                        <h6><FontAwesomeIcon icon={faClock}/>  DateFirstEvent: {leagueDetails.dateFirstEvent}</h6>
                        <h6><FontAwesomeIcon icon={faGlobe}/>  Country: {leagueDetails.strCountry}</h6>
                        <h6><FontAwesomeIcon icon={faFutbol}/>  Sport type: {leagueDetails.strSport}</h6>
                        <h6><FontAwesomeIcon icon={faMars}/>  Gender: {leagueDetails.strGender}</h6>
                    </div>
                    <div className=" image-size">
                       { leagueDetails.strGender && (
                            leagueDetails.strGender === 'Male'
                                ? <img src={maleImage} alt="" />
                                : <img src={femaleImage} alt="" />
                       )}
                    </div>
                </div>

                <p><small>{leagueDetails.strDescriptionEN}</small></p>
                <br />
                <p><small>{leagueDetails.strDescriptionEN}</small></p>
                <div className="text-center iconDesign">

                    <a href="https://www.facebook.com"><img src={facebook} alt="" /></a>
                    <a href="https://www.youTube.com"><img src={youTube} alt="" /></a>
                    <a href="https://www.twitter.com"><img src={twitter} alt="" /></a>

                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;