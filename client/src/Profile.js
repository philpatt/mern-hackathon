import React, { Component } from 'react';
import Widget from './Widget';
import DescWidget from './DescWidget';

class Profile extends Component {
  render(){
    if(this.props.user && this.props.user.name){
      return (<div>
          <h2>HELLO AGAIN {this.props.user.name}!</h2>
          <h4>Your email is {this.props.user.email}</h4>
        </div>);
    }
    else {
      return (<p>Must be logged in to view page!</p>);
    }
  }
}

export default Profile;
