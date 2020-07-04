import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './hello';

function App({name,age}) {
  return <div>
    Hello from App.Js {name} Age = {age + 6} 
    <br/>
    <Hello firstname={name}></Hello>
    </div>
}

export default App;
