import React from 'react';

function BalanceDisplay({ balance }) {
  return <div id="balanceDisplay">Balance: ${balance.toFixed(2)}</div>;
}

export default BalanceDisplay;
