import "./App.css";


import Navbar from "./Component/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import Art from "./Component/Art"
import Video from "./Component/Video";
import Music from "./Component/Music";

import ContactForm from "./Component/ContactForm";
import LandingPage from "./Component/LandingPage"
import Footer from "./Component/Footer";

function App() {
  
 
  
  return (
    <div className="App"  >
      <Navbar />
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home">
          <LandingPage />
        </Route>
        <Route path="/art">
          <Art />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="/contact">
          <ContactForm />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
      </Switch>
      <Footer />
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossorigin
      ></script>
    </div>
  );
}

export default App;
