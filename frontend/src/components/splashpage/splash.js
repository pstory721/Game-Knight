import "./splash.css";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function SplashPage() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) return <Redirect to="/home" />;

  return (
    <div id="main">
      <div id="openingDiv">
        <h1 className='h'>GameKnight is for everyone</h1>
        <h2>Come leave your house and actually get to play your favorite games with people who love Tabletop games like you, or dont play it through table top sim. We cant tell you what to do.</h2>
        <img></img>
      </div>
      <div id="imgDiv">
        <img
          src={process.env.PUBLIC_URL + "/img/MAGDNDLogo_Dice_600x600.jpg"}
          alt="DnD logo"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/40k-Logo.webp"}
          alt="40k logo"
        ></img>
        <img
          src={process.env.PUBLIC_URL + "/img/games_rdibanner.jpg"}
          alt="red dragon inn"
        ></img>
      </div>
      <div id="linkDiv"></div>
      <div id="howDiv">
        <h2 className="header">How GameKnight works</h2>
        <h2>
          GameKnight lets you connect to other people in your are with the love
          for table top gaming
        </h2>
        <div id="spacerDiv">
          <div>
            <Link
              className="homeLinks"
              onClick={() => {
                alert("Please signin or create an account with us");
              }}
              to="/"
            >
              Join a group
            </Link>
          </div>
          <div>
            <Link
              className="homeLinks"
              onClick={() => {
                alert("Please signin or create an account with us");
              }}
              to="/"
            >
              Find an Event
            </Link>
          </div>
          <div>
            <Link
              className="homeLinks"
              onClick={() => {
                alert("Please signin or create an account with us");
              }}
              to="/"
            >
              Start a Group
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
