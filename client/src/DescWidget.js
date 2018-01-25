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
				<div> </div>
			)
	}
}
class HotOutfit extends Component {

	render(){
		return(
			<div className='outfit'> 
				<h2>No shirt, No shoes, Hit the BEACH!
				<br /> Assuming you live near one. 
				</h2>

				<img src='./img/sunnyoutfit.jpg' />
			</div>
		)
	}
}
class WarmOutfit extends Component {
	render(){
		return(
			<div className='outfit'>
				<h2>Pants, long sleeve, light jacket.
				<br /> You should survive.
				</h2>
			</div>
		)
	}
}
class ChillyOutfit extends Component {
	render(){
		return(
			<div className='outfit'>
				<h2>Favorite sweater for sure, 
				<br />
				Probably an insulated jacket too.</h2>
			</div>
		)
	}
}
class ColdOutfit extends Component {
	render(){
		return(
			<div className='outfit'>
				<h2>No long johns needed, 
				<br />
				But you could wear them if you want.</h2>
			</div>
		)
	}
}
class FreezingOutfit extends Component {
	render(){
		return(
			<div className='outfit'>
				<h2>Holy crap its cold, 
				<br />
				wear everything you own.</h2>
				<img src='./img/freezingcold.jpg' />
			</div>
		)
	}
}





export default DescWidget;