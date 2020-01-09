import React, {Component} from 'react';
import './style.css';

class LeftBox extends Component {

    render() {
        const p=new Date();
         let weatherIcon = "http://openweathermap.org/img/w/" + this.props.object.weather[0].icon + ".png"
        // console.log(n);
        // console.log(p.getMonth());
        const find=  <span>{this.props.object.name},{this.props.object.sys.country},{p.toDateString()}</span>
        return (
           
            <div className = "left">
               <span id="find">{find}</span>  
                <p className="temp">{this.props.temp}<sup>o</sup>C   <img src={weatherIcon}/> </p>
            </div>
        );
    }
}

export default LeftBox;