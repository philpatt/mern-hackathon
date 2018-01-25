import React, { Component } from 'react';
import Widget from './Widget';
import DescWidget from './DescWidget';
import JacketWidget from './JacketWidget';



class Home extends Component {
	constructor(props){
		super(props)
		this.state={
				zipCode: '',
				weather:{}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
    this.setState({zipCode: e.target.value}, () => {
    console.log('zipcode', this.state.zipCode);

    	})
	}
	handleSubmit(e){
		e.preventDefault(e);
		var base = this
		let zipCode = this.state.zipCode;
  		let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip='+ zipCode +',us&appid=052f26926ae9784c2d677ca7bc5dec98'
  		fetch(weatherApi)
  		.then((response) =>{
  			console.log('response returned is', response);
  			return response.json()
  		}).then((json) => {
  			console.log('response json is', json);
  			base.setState({ weather: json});
    		console.log('weather state', this.state.weather);
  		}).catch((ex) => {
  			console.log('an error occured while parsing!' ,ex);
  		})
  	}	
  	render () {

    	return (
    		<div className="homeWidget">
    		<div className="description">
    		When traveling across the US have you ever asked yourself.
			<br />	
			What is the weather there like?
				<br />			
			Should I bring a rain coat? 
    		</div>
	    		<form onSubmit={ this.handleSubmit }>
						<label className="zipcode">
							<p>
							Please enter your zip code for the weather: </p>
							
						</label>

						<input type="text"  onChange={this.handleChange} />
						<input  type="submit" value="Get my forecast!" />
					</form>
			<JacketWidget weather={this.state.weather} />
			<Widget weather={ this.state.weather } />
    		<DescWidget weather={this.state.weather } />
    		

			</div>
    	)
	}
}

export default Home;
