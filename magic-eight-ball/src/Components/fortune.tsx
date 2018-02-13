import * as React from 'react';
import '../App.css';
import * as Common from '../common';
interface Style {
  color: string;
}

/* const badImage = require('../images/unhappy.png');
const goodImage = require('../images/happiness.png');
const neutralImage = require('../images/neutral.jpg');*/

class FortunePage extends React.Component {
    constructor (props: {}, state: {}) {
        super(props);
        this.GetFortune = this.GetFortune.bind(this);
        }
    GetFortune() {
        let fortunes: Common.Fortune[] = [
            {fortuneType: Common.FortuneType.Good, fortune: 'Everything will happen the way you want it to'},
            {fortuneType: Common.FortuneType.Bad, fortune: 'Your nemesis will get everything they want'},
            {fortuneType: Common.FortuneType.Neutral, 
            fortune: 'It won’t be super memorable' +
            ' In a good or bad way'}
            ];    
        return fortunes[0];
    }        
    render() {
        let style: Style = {color: 'green'};
       // let fortune = this.GetFortune();
       // let image: string = '';
        /* switch (fortune.fortuneType) {
            case Common.FortuneType.Good: {
                style.color = 'blue';
                // image = goodImage;
                break;
            }
            case Common.FortuneType.Bad: {
                style.color = 'red';
                // image = badImage;
                break;
            }
            case Common.FortuneType.Neutral: {
                style.color = 'purple';
                // image = neutralImage;
                break;
            }
            default: {
                break;
            }
        }*/

        return (
        <div>
            {/*<big style={style} className="Fortune-text"> {fortune.fortune} </big>*/}
            <big style={style} className="Fortune-text"> Your future is looking awesome! </big>
            {/*<img src={image} />*/}
        </div>
        );
        
  }
}

export default FortunePage;