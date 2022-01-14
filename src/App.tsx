import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './screens/Home';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact render={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
