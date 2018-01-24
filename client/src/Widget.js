import React from 'react';

const Widget = props => {
	if(Object.keys(props.weather).length > 0){
	  return(
	 	<div>
        	<div>Your City is: {props.weather.name}</div>
      	</div>
      	)
	  }	else {
	  	return (
	  		<div>
	  			<p>Async Issues</p>
	  		</div>
	  	)
	  }
	}

export default Widget;