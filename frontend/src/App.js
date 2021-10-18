import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { SplashPage } from "./components/splashpage/splash";
import { Home } from "./components/HomePage/home";
import { Organize } from "./components/OrganizingGroup/Organize";
import { GroupPage } from "./components/Group-Page/Group-Page";
import { Search } from "./components/search/Search";
import { CreateVenue } from "./components/create-venue/create-venue";
import { CreateEvent } from "./components/create-event/create-event";
import { EventPage } from "./components/event-page/event-page";
import FooterComponent from "./components/footer";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
           <Route exact path="/">
            < SplashPage />
          </Route>
          <Route path="/home">
            < Home />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/create-group">
            <Organize />
          </Route>
          <Route path="/group-page/:id">
            <GroupPage />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create-event">
            <CreateEvent />
          </Route>
          <Route path="/event-page/:id">
            <EventPage />
          </Route>
          <Route path="/create-venue">
            <CreateVenue />
          </Route>
        </Switch>

      )}
      <FooterComponent />
    </>
  );
}

export default App;
