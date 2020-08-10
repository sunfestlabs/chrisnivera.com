import React from 'react';
import Home from './home.jsx';
import Stopwatch from './stopwatch.jsx';
import Friendecks from './friendecks.jsx';
import IterativeDesign from './iterative_design.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (

    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/projects/stopwatch" component={Stopwatch}></Route>
      <Route path="/projects/friendecks" component={Friendecks}></Route>
      <Route path="/projects/ide" component={IterativeDesign}></Route>
    </Switch>

  );
}

export default App;
