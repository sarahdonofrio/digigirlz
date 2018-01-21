import * as React from 'react';
import '../App.css';
import { Link  }  from 'react-router-dom';
const magicEightBall = require('../images/Magic_eight_ball.png');

class MagicEightBall extends React.Component {
  render() {
    return (
        <div className="Magic-EightBall-Container">
          <p className="Magic-Eigthball-Intro">
            Let's look into the future and see what it holds
          </p>
          <Link to="/fortune"> 
            <img src={magicEightBall} className="Magic-Eightball-Image" />
          </Link>
        </div>
    );
  }
}

export default MagicEightBall;