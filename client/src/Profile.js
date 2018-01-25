import React, { Component } from 'react';
import Widget from './Widget';
import DescWidget from './DescWidget';
import JacketWidget from './JacketWidget';

class Profile extends Component {
  render(){
    if(this.props.user && this.props.user.name){
      return (<div>
        </div>);
    }
    else {
      return (<p>Must be logged in to view page!</p>);
    }
  }
}

export default Profile;
