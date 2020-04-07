import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

type Props = {
  doc: any;
};

function Node(props: Props) {
  const { doc } = props;
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <div className="node-item" onClick={() => setCollapse(!collapse)}>
        {doc.file ? (
          <Link to={`/${doc.uid}`}>{doc.name}</Link>
        ) : (
          <span>{doc.name}</span>
        )}
      </div>
      {!collapse && !doc.file && (
        <div className="node-item__docs">
          {doc.docs.map((d: any) => {
            return <Node key={d.uid} doc={d}></Node>;
          })}
        </div>
      )}
    </div>
  );
}

export default Node;
