import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import docs from '../../docs';
import Node from '../../components/node';
import Doc from '../doc';
import './index.scss';

function Home(props: any) {
  useEffect(() => {
    console.log('home', props.location, props.match);
  });
  return (
    <div className="home">
      <div className="menus">
        <Node doc={docs}></Node>
      </div>
      <Router>
        <Route location={props.location} path="/:did" component={Doc} />
      </Router>
    </div>
  );
}

export default Home;
