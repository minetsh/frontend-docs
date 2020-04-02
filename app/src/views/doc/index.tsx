import React, { useState, useEffect } from 'react';
import MarkDown from 'react-markdown';
import { dids } from '../../docs';
import './index.scss';

type Props = {
  match: any;
  uri: string;
};

function Doc(props: Props) {
  const [source, setSource] = useState('');
  useEffect(() => {
    const { did } = props.match.params;
    fetch(dids[did]).then(response => {
      response.text().then(source => {
        setSource(source);
      });
    });
  }, [props.match]);

  return (
    <div>
      <MarkDown source={source} />
    </div>
  );
}

export default Doc;
