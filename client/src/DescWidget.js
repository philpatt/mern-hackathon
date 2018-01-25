import React, { Component } from 'react';
const kelvinToFahrenheit = require('kelvin-to-fahrenheit');
 

const DescWidget = props => {
	if(Object.keys(props.weather).length > 0){
		let temp = props.weather.main.temp;
		let tempF = kelvinToFahrenheit( parseInt(temp) );
		console.log('tempF is ', tempF)
			{ if(tempF >= 80){ 
				return(
					<HotOutfit /> 
					)
			  	} else if(tempF >= 60 && tempF <=79) {
				return(
						<WarmOutfit /> 
					)
			  	} else if(tempF >= 40 && tempF <=59){
			  		return(
						<ChillyOutfit /> 
					)
			  	} else if(tempF >= 20 && tempF <=39){
			  		return(
						<ColdOutfit /> 
					)
			  	} else{
			  		return(
						<FreezingOutfit /> 
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
			<div>
				<h2>no shirt, no shoes, BEACH!</h2>
			</div>
		)
	}
}
class WarmOutfit extends Component {
	render(){
		return(
			<div>
				<h2>Pants,Long sleeve, maybe a litght jacket</h2>
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
				<h2>holy crap its cold, wear eveyrthing you own</h2>
			</div>
		)
	}
}





export default DescWidget;