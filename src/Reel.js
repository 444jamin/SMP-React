import React from 'react';
import Symbol from './Symbol';

function Reel({ symbols }) {
  return (
    <div className="reel">
      {symbols.map((symbol, index) => <Symbol key={index} symbol={symbol} />)}
    </div>
  );
}

export default Reel;
