import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Dashboard from './components/Dashboard/dashboard';
  export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }
    render() {
      return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} 
                    render= {props => (
                      <Home  {...props}/>
                    )}>
                </Route>
                <Route path={'/dashboard'} 
                  render= {props => (
                    <Dashboard  {...props}/>
                  )}>
                </Route>
            </Switch>
      </BrowserRouter>
    );
    }
}

