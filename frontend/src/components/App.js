import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';
import Home from './Home';
import About from './About';
import ProjectList from './projects/ProjectList';
import ProjectShow from './projects/ProjectShow';

const App = () => {
  return (<div>
    <Router history={history}>
      <div>
        App Navigation Bar
        <Switch>
          {/* Routes */}
          <Route path="/" exact={true} component={Home}/>
          <Route path="/projects" exact={true} component={ProjectList}/>
          <Route path="/projects/:id" exact={true} component={ProjectShow}/>
          <Route path="/about" exact={true} component={About}/>
        </Switch>
      </div>
    </Router>
  </div>);
};

export default App;
