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
				<div> </div>
			)
	}
}
class Thunder extends Component {

	render(){
		return(
			<div className="jacketWidget">
				<h2>Should I wear a Rain jacket?: YES</h2>

			</div>
		)
	}
}
class Drizzle extends Component {
	render(){
		return(
			<div className="jacketWidget">
				<h2>Should I wear a Rain jacket?: YES</h2>
			</div>
		)
	}
}
class Rain extends Component {
	render(){
		return(
			<div className="jacketWidget">
				<h2>Should I wear a Rain jacket?: YES</h2>
			</div>
		)
	}
}
class Snow extends Component {
	render(){
		return(
			<div className="jacketWidget">
				<h2>Should I wear a Rain jacket?: YES</h2>
			</div>
		)
	}
}
class Clouds extends Component {
	render(){
		return(
			<div className="jacketWidget">
				<h2>Should I wear a Rain jacket?: Maybe... 
				<br />
				It is only cloudy</h2>
			</div>
		)
	}
}
class Extreme extends Component {
	render(){
		return(
			<div className="jacketWidget">
				<h2>There is some EXTREME weather happening outside,
				<br /> 
				Why are you worried about a jacket right now, 
				<br /> 
				Hurry up and save your family... 
				<br /> 
				Seriosuly, why are you on the internet right now?</h2>
			</div>
		)
	}
}
class Clear extends Component {
	render(){
		return(
			<div className="jacketWidget">
				<h2>Should I wear a Rain jacket?: No</h2>
			</div>
		)
	}
}
class Atmostphere extends Component {
	render(){
		return(
			<div className="jacketWidget">
				<h2>Should I wear a Rain jacket?: No</h2>

			</div>
		)
	}
}
class Additional extends Component {
	render(){
		return(
			<div className="jacketWidget">
				<h2>Should I wear a Rain jacket?: YES
					<br />
					Possibly every jacket you own. 
				</h2>
			</div>
		)
	}
}




export default JacketWidget;