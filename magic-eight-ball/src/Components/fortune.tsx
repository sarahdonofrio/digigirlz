import * as React from 'react';
import '../App.css';
// import * as Common from '../common'
interface Style {
  color: string;
  fontWeight: 'bold';
}

class FortunePage extends React.Component {
    constructor (props: {}, state: {}) {
        super(props);
        this.GetFortune = this.GetFortune.bind(this);
        }
    GetFortune() {
        /*let fortunes: Common.Fortune[] = [
            {fortuneType: Common.FortuneType.Good, fortune: 'Everything will happen the way you want it to'},
            {fortuneType: Common.FortuneType.Bad, fortune: 'Your nemesis will get everything they want'},
            {fortuneType: Common.FortuneType.Neutral, 
            fortune: 'It won’t be super memorable' +
            'In a good or bad way'}
            ];  */   
    }        
    render() {
        let style: Style = {color: 'green', fontWeight: 'bold'};
        // let fortune = GetFortune();

        /*switch (fortune.fortuneType) {
            case Common.FortuneType.Good: {
                style.color = 'blue';
                break;
            }
            case Common.FortuneType.Bad: {
                style.color = 'red';
                break;
            }
            case Common.FortuneType.Neutral: {
                style.color = 'purple';
                break;
            }
            default: {
                break;
            }
        }*/

        return (
        <div>
            <big style={style} className="Fortune-text"> Your future is looking awesome! </big>
        </div>
        );
        
  }
}

export default FortunePage;