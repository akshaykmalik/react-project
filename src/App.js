
import React, {Component} from 'react';

import logo from './logo.svg';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

import './style.css';
import xyz from './Capture.jpg';
import { thisExpression } from '@babel/types';

class App extends Component
{
	constructor()
	{
		super() ;
		this.state = {

		
			icon : undefined ,
			show : false,
      currentComment : '',
			comment : [],
      countComment : 0,
      cityNameFound: true,
      // found:true,
      isShowing :false,
      cityNameNotFound: false,
      
      // icon:''
    }
    this.searchBox=this.searchBox.bind(this);
	}

	setCity = (event) => {
		this.setState({
      city : event.target.value,
      show:false
		})
		console.log(this.state.city) ;
	}

	api = async (name) => {
		const API_KEY='1061ff9d7560fb110e0b5293cf4a0eb3' ;
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}&units=metric`) ;
    const myJson = await response.json() ;
    console.log(response) ;
    if(response.status == 404)
    {
      this.setState({ cityNameNotFound: true });
      return 404 ;
    }
    else{
    console.log(myJson) ;
    return myJson ;
    }
	}

	setComment = (event) => {
		this.setState ({
      currentComment : event.target.value
      
    })
    console.log(this.state.comment) ;
	}
  
	search = async () => {

    this.setState({ isShowing: true,cityNameNotFound:false});

    const Json = await this.api(this.state.city) ;
    console.log(Json) ;
    if(Json != 404)
    {
    this.object=Json;
    
   
    
		this.setState ({
      sear : true,
      cityNameFound:true,
			temp : Json.main.temp,
			pressure : Json.main.pressure,
			humidity : Json.main.humidity,
			max : Json.main.temp_max,
			min : Json.main.temp_min,
			weather : Json.weather[2],
			sunrise : '',
			sunset : '',
			wind : Json.wind.speed,
			country : Json.sys.country,
			icon : Json.weather.icon,
      show : true,
      isShowing: false
    })
  }
  else
  {
    this.setState ({
      cityNameFound : false,
      show:false
    })
  }
  }
  
  postComment = () => {
    this.setState({
      comment : [...this.state.comment, this.state.currentComment],
      countComment : this.state.countComment + 1,
      currentComment:''
    })
  }
  searchBox()
  {
    if(this.state.isShowing)
    {
      return (
        <div className={'searchBox'}>
         <span className={'asp'}>{(this.state.cityNameNotFound) ? 'City Not Found' : 'Searching City name...'}</span>
        </div>
      );
    }
    else
    {
      return <div></div>
    }
  }
	render () {
  
    let entries = this.state.comment.map((eachElm)=>(
      //<div>
       
      <p className = "spa1"><img className = "image" src={xyz} height="18px" width="15px"/> {eachElm}</p>
      //</div>
    ))
   
	return (
		<div>
			<div className = "header"><span className="heading">Weather App</span></div>
			<center><input className = "name" onChange = {this.setCity} value = {this.state.city} placeholder = "Enter City Name..."/>

			<button className = "btn" onClick = {this.search}>Search</button></center>
      


      {this.state.show &&
        <div className = "show">
        <div>
        <LeftBox temp={this.state.temp} object={this.object}/>
        </div>
        <div>
        <RightBox wind={this.state.wind} object={this.object}/>
          </div>
      </div>
      }

      
    
    <br/>
    <this.searchBox />
    {/* {!this.state.cityNameFound && 
      <div className = "comment">
        Invalid City Name
        </div>
    } */}
    
    {this.state.show && 
    <div className = "comment">
				<textarea  cols="10"className = "name1" onChange = {this.setComment} placeholder = "Enter your comment here..." value = {this.state.currentComment}/>

				<div><button className = "btn1" onClick = {this.postComment}>Comment</button></div>
  
				<div>
					<p className="spa">Comments ({this.state.countComment})</p>
          {entries}
				</div>
      </div>
    }
		</div>
	)}
}


export default App;
