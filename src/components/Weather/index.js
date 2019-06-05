import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  WeatherContainer
} from './styles';


const Weather = () => {

  const [state, setToggle] = useState({toggle: false});

  const onToggle = (e) => {

    setToggle({toggle: !state.toggle});
    console.log(state, 'inside');
  }

  const test = (e) => {
    e.stopPropagation();
    console.log('123');
  }

  return (
    <WeatherContainer onClick={onToggle}>
      <div onClick={test}>
        123
      </div>
    </WeatherContainer>
  );
}

export default connect(null, null)(Weather);


