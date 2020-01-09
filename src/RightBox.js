import React, {Component} from 'react';
import './style.css'
class RightBox extends Component {

    render() {
		let sunrise =  new Date(this.props.object.sys.sunrise*1000).toLocaleTimeString();
      let sunset =  new Date(this.props.object.sys.sunset*1000).toLocaleTimeString();
		// console.log(y);
		let entry=<span><b>{sunrise}</b></span>
        let entryz=<span><b>{sunset}</b></span>
		//console.log(a);
        return (
            <div className = "right">
					Weather: <b>{this.props.object.weather[0].main}</b>
					<br/>
					Wind: <b>{this.props.wind} km/hr</b>
						<br/><br/>
					Humidity: <b>{this.props.object.main.humidity}%</b>
					<br/>
					Pressure: <b>{this.props.object.main.pressure} Pa</b>
						<br/><br/>
					Max Temp: <b>{this.props.object.main.temp_max}<sup>o</sup>C</b>
					<br/>
					Min Temp:<b> {this.props.object.main.temp_min}<sup>o</sup>C</b>
						<br/><br/>
					Sunrise: {entry}
					<br/>
					Sunset: {entryz}
				</div>
        );
    }
}

export default RightBox;