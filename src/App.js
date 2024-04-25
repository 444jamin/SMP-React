import React from 'react';
import BalanceDisplay from './BalanceDisplay';
import InputField from './InputField';
import Button from './Button';
import ReelContainer from './ReelContainer';
import MessageDisplay from './MessageDisplay';

function App() {
  return (
    <div className="gameContainer">
      <h1>Slot Machine Game</h1>
      <BalanceDisplay />
      <div>
        <InputField type="text" placeholder="Enter deposit amount" />
        <Button text="Deposit" />
      </div>
      <div>
        <InputField type="number" placeholder="Enter your bet" />
        <Button text="Spin" />
      </div>
      <ReelContainer />
      <MessageDisplay />
      <Button text="Play Again" />
    </div>
  );
}

export default App;
