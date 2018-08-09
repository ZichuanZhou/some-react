import React, { Component } from "react";
import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
import Clock from './Clock';
import Layout from './Layout'

const API_KEY = "d93b00c19d9ad554af946294d5d0ddec";

export default class App extends Component {

	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined,
		display: true
	}

	getWeather = async(e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+API_KEY+'&units=metric');
		const data = await api_call.json();

		if(city && country) {
			console.log(data);
			if(data.cod == 200) {
				this.setState({
					temperature: data.main.temp,
					city: data.name,
					country: data.sys.country,
					humidity: data.main.humidity,
					description: data.weather[0].description,
					error: ""
				});
			} else {
				this.setState({
					temperature: undefined,
					city: undefined,
					country: undefined,
					humidity: undefined,
					description: undefined,
					error: "Please enter the values"
				});
			}
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: "Please enter the values"
			});
		}
	}

	onClilckHandler() {
		this.setState({
			display: !this.state.display
		});
	}

	render() {
		let content = "";
        if(this.state.display) {
            content = (
                <Layout name={this.state.city}/>
            );
        } else {
			content = (<p>no content to display</p>);
		}
		return (
		<div>
			<Titles />
			<Form getWeather={this.getWeather}/>
			<Weather 
				temperature={this.state.temperature} 
				city={this.state.city} 
				country={this.state.country} 
				humidity={this.state.humidity}
				description={this.state.description}
				error={this.state.error}
			/>
			<br/>
			{content}
			<button onClick={this.onClilckHandler.bind(this)}>(un)Mount</button>
		</div>
		);
	}
}
