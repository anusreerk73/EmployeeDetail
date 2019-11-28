import React, {Component} from 'react';
import Login from '../Login/login';
  export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
       this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }
    handleSuccessfulAuth() {
        this.props.history.push("/dashboard")
    }
    render() {
      return (
       <span>
           <Login handleSuccessfulAuth={this.handleSuccessfulAuth}  />
       </span>
    );
    }
}

