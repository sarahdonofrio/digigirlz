import * as React from 'react';
import { Switch, Route, BrowserRouter  }  from 'react-router-dom';
import './App.css';
import MagicEightBall from './Components/magicEightBall';
import FortunePage from './Components/fortune';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-font"> Welcome to seeing your future </h1>
        </header>
        <BrowserRouter >
          <Switch>
            <Route exact={true} path="/" component={MagicEightBall}/>
            <Route  path="/fortune" component={FortunePage}/>
          </Switch>
    </BrowserRouter >
      </div>
    );
  }
}

export default App;
