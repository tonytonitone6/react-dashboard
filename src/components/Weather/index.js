import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';

@pureComponent
class Weather {
  render() {
    return (
      <div>
        weather
      </div>
    )
  }
};

export default connect(null, null)(Weather);


