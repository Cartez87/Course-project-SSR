import "isomorphic-fetch";
import "babel-polyfill";
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.scss';

const App = ({ Router, location, context, store }) => {
  console.log(store);
  return (
  <Provider store={store}>
    <Router location={location} context={context}>
      <div>
        <Switch>
          <Route path="/search" component = {Header} />
          <Redirect from = '/' to ='search'></Redirect>
        </Switch>
        <MainContent />
        <Footer />
      </div>
    </Router>
  </Provider>
)};

export default hot(module)(App);
