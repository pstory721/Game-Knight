import './splash.css';
import { Link } from 'react-router-dom';


export function SplashPage (){




return (


    <div>
        <div id='openingDiv'>
            <h1 className='header'>GameKnight is for everyone</h1>
            <p>hey come play games</p>
            <img></img>
        </div>
        <div id='imgDiv'>
            <img src={process.env.PUBLIC_URL +'/img/MAGDNDLogo_Dice_600x600.jpg'} alt="DnD logo"/>
            <img src={process.env.PUBLIC_URL +'/img/40k-Logo.webp'} alt="40k logo"></img>
            <img src={process.env.PUBLIC_URL +'/img/games_rdibanner.jpg'} alt="red dragon inn"></img>
        </div>
        <div id='linkDiv'>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
        </div>
        <div id='howDiv'>
            <h2>How GameKnight works</h2>
            <p>GameKnight lets you connect to other people in your are with the love for table top gaming</p>
            <div id='spacerDiv'>
                <div>
                   <Link to='/search' >Join a group</Link>
                    <p>do what ya love</p>
                </div>
                <div>
                <Link to='/search' >Find an Event</Link>
                    <p>do things with people</p>
                </div>
                <div>
                <Link to='/create-group' >Start a Group</Link>
                    <p>Make "friends"</p>
                </div>
            </div>
        </div>
    </div>



)





}
