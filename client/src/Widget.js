import React from 'react';
const kelvinToFahrenheit = require('kelvin-to-fahrenheit');

const Widget = props => {

	if(Object.keys(props.weather).length > 0){
		let tempMin = props.weather.main.temp
		let kToFMin = kelvinToFahrenheit(parseInt(tempMin))
		let kMin = Math.round(kToFMin)

		let tempMax = props.weather.main.temp_max
		let kToFMax = kelvinToFahrenheit(parseInt(tempMax))
		let kMax = Math.round(kToFMax)

		let temp = props.weather.main.temp
		let kToF = kelvinToFahrenheit(parseInt(temp))
		let kTemp = Math.round(kToF)

	  return(
	 	<div className="weatherWidget">
        	<div>Your City is: {props.weather.name}</div>
        	<div>Today's Temperature Stats...</div>
        	<div>Actual Temperature: {kTemp} </div>
        	<div>High Today: {kMax}</div>
        	<div>Low Today: {kMin}</div>
      	</div>
      	)
	  }	else {
	  	return (
	  		<div>
	  			<p>Display Your Weather Results</p>
	  		</div>
	  	)
	  }
	}

export default Widget;