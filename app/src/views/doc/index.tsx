import React, { useState, useEffect } from 'react';
import MarkDown from 'react-markdown';
import { dids } from '../../docs';
import { fetchDocmentSource } from '../../common/app';
import './index.scss';

type Props = {
  match: any;
  uri: string;
};

function Doc(props: Props) {
  const [source, setSource] = useState('');
  useEffect(() => {
    const { did } = props.match.params;
    fetchDocmentSource(dids[did]).then(setSource);
  }, [props.match]);

  return (
    <div>
      <MarkDown source={source} />
    </div>
  );
}

export default Doc;
