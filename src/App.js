import './App.css';
import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Country/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
 
  return (
    <Router className="App">
     <Switch>
       <Route path ='/Home'>
       <Home></Home>
       </Route>
       <Route path ="/country/:countryId">
         <CountryDetail/>
       </Route>
       <Route exact path="/">
        <Home/>
       </Route>
      <Route path ="*">
        <NoMatch/>
      </Route>
     </Switch>
     
    </Router>
  );
}

export default App;
