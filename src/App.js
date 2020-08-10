import React from 'react';
import Home from './Home.jsx';
import Stopwatch from './Stopwatch.jsx';
import Friendecks from './Friendecks.jsx';
import IterativeDesign from './IterativeDesign.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Flexibly from './Flexibly.jsx';
import ProductExtractor from './ProductExtractor.jsx';

function App() {
  return (

    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/projects/medinas" component={ProductExtractor} />
      <Route path="/projects/stopwatch" component={Stopwatch}></Route>
      <Route path="/projects/friendecks" component={Friendecks}></Route>
      <Route path="/projects/ide" component={IterativeDesign}></Route>
      <Route path="/projects/flexibly" component={Flexibly}></Route>
      <Route render={() => <Redirect to="/" />}></Route>
    </Switch>

  );
}

export default App;
