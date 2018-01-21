import * as React from 'react';
import '../App.css';
import * as Common from '../common';
const badImage = require('../images/unhappy.png');
const goodImage = require('../images/happiness.png');
const neutralImage = require('../images/neutral.jpg');

interface Style {
    color: string;
    fontWeight: 'bold';
}

let fortunes: Common.Fortune[] = [
    {fortuneType: Common.FortuneType.Good, fortune: 'You will make a lot of money'},
    {fortuneType: Common.FortuneType.Good, fortune: 'You will get into the college of your dreams'},
    {fortuneType: Common.FortuneType.Good, fortune: 'You\'ll stumble upon a lost object'},
    {fortuneType: Common.FortuneType.Bad, fortune: 'You\'ll be late to school soon'},
    {fortuneType: Common.FortuneType.Bad, fortune: 'Your dinner will not agree with your stomach'},
    {fortuneType: Common.FortuneType.Bad, fortune: 'Someone is really mad at you right now'},
    {fortuneType: Common.FortuneType.Neutral, fortune: 'You will have a normal week'},
    {fortuneType: Common.FortuneType.Neutral, fortune: 'You will crave apples all next week'},
    {fortuneType: Common.FortuneType.Neutral, 
        fortune: 'You will go to a restaurant and all their' +
                 'dishes look okay and you\'ll have a hard time making up your mind'
    }
];

class FortunePage extends React.Component {
 constructor ({}: {}, {}: {}) {
     super({});
     this.GetFortune = this.GetFortune.bind(this);
 }
 GetFortune(): Common.Fortune { 
     return fortunes[Math.floor((Math.random() * 10))];
  }
  render() {
    let fortune = this.GetFortune();
    let style: Style = {color: 'black', fontWeight: 'bold'};
    let image = neutralImage;
    switch (fortune.fortuneType) {
        case Common.FortuneType.Bad:
        {
            image = badImage;
            style.color = 'red';
            break;
        }
        case Common.FortuneType.Good:
        {
            image = goodImage;
            style.color = 'blue';
            break;
        }
        case Common.FortuneType.Neutral:
        {
            image = neutralImage;
            style.color = 'green';
            break;
        }
        default:
            break;
    }

    return (
        <div>
            <div style={style} className="Fortune-text"> Your fortune is {fortune.fortune}</div>
            <img src={image} />
        </div>
    );
  }
}

export default FortunePage;