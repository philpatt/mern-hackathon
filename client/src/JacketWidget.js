import React, { Component } from 'react';
import './index.css';




const JacketWidget = props => {
	if(Object.keys(props.weather).length > 0){
		let id = props.weather.weather[0].id;
		let weatherId= parseInt(id);
		console.log('######',id)
			{ if(weatherId >= 200 && weatherId <= 232){ 
				return(
					<div>
						<Thunder />
					</div> 
					)
			  	} else if(weatherId >= 300 && weatherId <=321) {
				return(
					<div>
						<Drizzle/> 
					</div>
					)
			  	} else if(weatherId >= 500 && weatherId <=531){
			  		return(
			  		<div>
						<Rain /> 
					</div>
					)
			  	} else if(weatherId >= 600 && weatherId <=622){
			  		return(
			  		<div>
						<Snow /> 
					</div>
					)
			  	} else if(weatherId >= 700 && weatherId <=781) {
			  		return(
			  		<div>
						<Atmostphere  />
					</div> 
					)
			  	} else if(weatherId === 800 ) {
			  		return(
			  		<div>
						<Clear  />
					</div> 
					)
			  	} else if(weatherId >= 800 && weatherId <=804) {
			  		return(
			  		<div>
						<Clouds  />
					</div> 
					)

			  	}else if(weatherId >= 900 && weatherId <=906 || weatherId >= 957) {
			  		return(
			  		<div>
						<Extreme  />
					</div> 
					)

			  	} else if(weatherId >= 951 && weatherId <=956) {
			  		return(
			  		<div>
						<Additional  />
					</div> 
					)
			  	} else {
			  		<div>
			  		no clue whats goin on in the weather.
			  		</div>
			  	}
			} 
	} else {
		return(
				<div>Should you wear a jacket?</div>
			)
	}
}
class Thunder extends Component {

	render(){
		return(
			<div>
				<h2>its thuderstorming, where a jacket</h2>

			</div>
		)
	}
}
class Drizzle extends Component {
	render(){
		return(
			<div>
				<h2>Its just drizzling so wear something waterproof</h2>
			</div>
		)
	}
}
class Rain extends Component {
	render(){
		return(
			<div>
				<h2>Its raining definitely wear a jacket</h2>
			</div>
		)
	}
}
class Snow extends Component {
	render(){
		return(
			<div>
				<h2>Its snowing!! you should wear a jacket...</h2>
			</div>
		)
	}
}
class Clouds extends Component {
	render(){
		return(
			<div>
				<h2>Just cloudy, no rain though...</h2>
			</div>
		)
	}
}
class Extreme extends Component {
	render(){
		return(
			<div>
				<h2>There is some EXTREME weather happening outside, why are you worried about a jacket right now, hurry up and save your family... seriosuly close this app</h2>
			</div>
		)
	}
}
class Clear extends Component {
	render(){
		return(
			<div>
				<h2>Its beautiful out!</h2>
			</div>
		)
	}
}
class Atmostphere extends Component {
	render(){
		return(
			<div>
				<h2>Youre good, no jacket..</h2>

			</div>
		)
	}
}
class Additional extends Component {
	render(){
		return(
			<div>
				<h2>holy crap its cold, wear everything you own</h2>

			</div>
		)
	}
}




export default JacketWidget;