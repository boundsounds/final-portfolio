import React from "react";
import Art from "./Art";
import { Blog } from "./Blog";
import ContactForm from "./ContactForm";
import Music from "./Music";
import Video from "./Video";
import { Switch, Route, Link } from "react-router-dom";
import { Jumbotron, Button, Image } from "react-bootstrap";
import landing1 from "../Art/scforlanding.png";
import landing2 from "../Art/spotifyforlanding.png";
import landing3 from "../Art/bandcampforlanding.png";
import landing4 from "../Art/adobeforlanding.png";
import landing5 from "../Art/githubforlanding.png";
import jumbo from "../Art/boundslandingimage.png";
import background from "../Art/backgroundimage.jpg";
import Navigation from "./Navbar";

export const LandingPage = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Image src={jumbo} className="main-landing-image" fluid />
        <br />
        <br />
        <br />
        <a href="https://soundcloud.com/bwnds">
          <Image src={landing1} className="landing-images" />
        </a>
        <a href="https://open.spotify.com/artist/5NJSK3tqLAJKSAndCeWc2P?si=yigHL4WBTu6u17YZ9UwsWA">
          <Image src={landing2} className="landing-images" />
        </a>
        <a href="https://bounds.bandcamp.com/">
          <Image src={landing3} className="landing-images" />
        </a>
        <a href="https://github.com/boundsounds">
          <Image src={landing5} className="landing-images" />
        </a>
        <a href="https://boundsav.myportfolio.com/">
          <Image src={landing4} className="landing-images" />
        </a>
        <div>
          <h2>Client List</h2>
          <a href="https://soundcloud.com/thisiswithout/sets/the-infinite-room-ep">
            {" "}
            w/out - The Infinite Room
          </a>
          <br />
          <a href="https://soundcloud.com/blvckprism/oracle">
            {" "}
            BlvckPrism - Oracle
          </a>
          <br />
          <a href="https://soundcloud.com/killedhenry/sets/anna-hoods">
            {" "}
            Henryisdead - Anna Hoods
          </a>
          <br />
          <a href="https://soundcloud.com/jmingo/mngo-i-misunderstood">
            {" "}
            M!NGO - I Misunderstood
          </a>
          <br />
          <a href="https://soundcloud.com/bwnds/hindsight">
            {" "}
            Bounds - Hindsight
          </a>
          <br />
          <a href="https://soundcloud.com/bwnds/cognition-1">
            {" "}
            Bounds - Cognition{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

//    <main>
//         <Switch>
//              <Route path="/" component={LandingPage} exact />

//             <Route path="/art" component={Art} />

//             <Route path="/video" component={Video} />
//              <Route path="/contact" component={ContactForm} />
//             <Route path="/music" component={Music} />
//             <Route path="/Blog" component={Blog} />
//         </Switch>

//         <Link to="/">Home </Link>
//   <Link to="/art">About Us </Link>
//   <Link to="/video">Shop Now </Link>
//     </main>
