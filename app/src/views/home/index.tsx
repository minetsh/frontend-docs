import React from 'react';
import MarkDown from 'react-markdown';
import docs from '../../docs/docs.json';
import './index.scss';

function Home() {
  return (
    <div className="home">
      <div className="docs">
        {docs.folders.map(folder => {
          return <li>{folder.name}</li>;
        })}
      </div>
      <div className="book">{/* <MarkDown source={README} /> */}</div>
    </div>
  );
}

export default Home;
