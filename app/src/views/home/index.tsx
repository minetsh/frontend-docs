import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
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
      <nav className="home__navigation">
        <Node doc={docs}></Node>
      </nav>
      <div className="home__docs">
        <Route location={props.location} path="/:did" component={Doc} />
      </div>
    </div>
  );
}

export default Home;
