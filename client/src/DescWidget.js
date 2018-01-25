import React, { Component } from 'react';
import './index.css';

const kelvinToFahrenheit = require('kelvin-to-fahrenheit');


const DescWidget = props => {
	if(Object.keys(props.weather).length > 0){
		let temp = props.weather.main.temp;
		let tempF = kelvinToFahrenheit( parseInt(temp) );
		console.log('tempF is ', tempF)
			{ if(tempF >= 80){ 
				return(
					<div>
						<HotOutfit weather={temp} />
					</div> 
					)
			  	} else if(tempF >= 60 && tempF <=79) {
				return(
					<div>
						<WarmOutfit /> 
					</div>
					)
			  	} else if(tempF >= 40 && tempF <=59){
			  		return(
			  		<div>
						<ChillyOutfit /> 
					</div>
					)
			  	} else if(tempF >= 20 && tempF <=39){
			  		return(
			  		<div>
						<ColdOutfit /> 
					</div>
					)
			  	} else{
			  		return(
			  		<div>
						<FreezingOutfit  />
					</div> 
					)
			  	}
			}

	} else {
		return(
				<div>What should you wear?</div>
			)
	}
}
class HotOutfit extends Component {

	render(){
		return(
			<div className='outfit'> 
				<h2>no shirt, no shoes, BEACH!</h2>
				<img src='./img/sunnyoutfit.jpg' />
			</div>
		)
	}
}
class WarmOutfit extends Component {
	render(){
		return(
			<div>
				<h2>Pants, long sleeve, litght jacket</h2>
			</div>
		)
	}
}
class ChillyOutfit extends Component {
	render(){
		return(
			<div>
				<h2>favorite sweater for sure, propbably an insulated jacket too</h2>
			</div>
		)
	}
}
class ColdOutfit extends Component {
	render(){
		return(
			<div>
				<h2>no long johns, but you could wear them if you want</h2>
			</div>
		)
	}
}
class FreezingOutfit extends Component {
	render(){
		return(
			<div>
				<h2>holy crap its cold, wear everything you own</h2>
				<img src='./img/freezingcold.jpg' />
			</div>
		)
	}
}





export default DescWidget;