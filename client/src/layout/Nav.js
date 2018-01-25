import React, { Component } from 'react';

import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){

    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/profile">Profile</Link>
          <Logout updateUser={this.props.updateUser} />
        </span>
      );

    }
    // else {
    //   links = (
    //     <span>
    //       <Link to="/login">Login</Link>
    //       <Link to="/signup">Sign Up</Link>
    //     </span>);
    // }

    return(
        <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to Weather Wear!</h1>
           </header>

          <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">

        <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/signup">Sign Up</a>
      </li>
    </ul>
  </div>
</nav>
</div>


      );
  }
}

export default Nav;
