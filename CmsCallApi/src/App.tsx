import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Concrete from "./Compentent/ProsAndCons/Concrete";
import Contentful from "./Compentent/ProsAndCons/Contentful";
import Ghost from "./Compentent/ProsAndCons/Ghost";
import Header from "./Compentent/Header/Header";
import Homepage from "./Compentent/Homepage/Homepage";
import KeystoneJs from "./Compentent/ProsAndCons/KeystoneJs";
import Prismic from "./Compentent/ProsAndCons/Prismic";
import Strapi from "./Compentent/ProsAndCons/Strapi";
import Mood from "./Compentent/strapi/Mood";
import PersonStrapi from "./Compentent/strapi/Person";
import PersonPrismic from "./Compentent/Prismic/Person";
import PersonContentful from "./Compentent/Contentful/Person"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/strapi">
            <Strapi />
          </Route>
          <Route exact path="/strapi/fetch">
            <PersonStrapi />
            <Mood />
          </Route>
          <Route exact path="/prismic">
            <Prismic />
          </Route>
          <Route exact path="/prismic/fetch">
            <PersonPrismic />
          </Route>
          <Route exact path="/contentful">
            <Contentful />
          </Route>
          <Route exact path="/contentful/fetch">
            <PersonContentful />
          </Route>
          <Route exact path="/keystonejs">
            <KeystoneJs />
          </Route>
          <Route exact path="/concrete">
            <Concrete />
          </Route>
          <Route exact path="/ghost">
            <Ghost />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
