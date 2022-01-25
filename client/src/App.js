import './App.scss';

import './fonts/Slabo13px-Regular.ttf'
import './fonts/Thasadith-Regular.ttf'

import logo from './logo.svg';
import video from './resources/Vid.mp4'

import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()
  const [canContinue, setCanContinue] = useState(true)

  const handleClick = () => {
    if (canContinue) {
      setCanContinue(false)
      setTimeout(() => navigate('portfolio'), 2000)
    }
  }

  return (
    <div className='pageBody'>
      <video className='video' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <div className='pageBody'>
        <div className='itemsContainer'>
          <h1>Andres Rodriguez</h1>
          <button onClick={() => handleClick()}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default App;
