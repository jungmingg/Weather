import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
//import Test from "./Test";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

const API_KEY = "2db79d0bd1b9932182dddc585d2d8ee1";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: {
              main: {temp},
              weather
            } 
          } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
     //http://api.openweathermap.org/data/2.5/weather?lat=37.2864069 &lon=127.0459031 &APPID=2db79d0bd1b9932182dddc585d2d8ee1&units=metric
      )
      //console.log(data);
      console.log(weather[0].main);

      this.setState({
        isLoading: false, 
        condition: weather[0].main, 
        temp
      });

  };
  getLocation = async() =>{
    try {      
      const resp = await Location.requestPermissionsAsync();        
      console.log(resp);

      //const location = await Location.getCurrentPositionAsync();
      //console.log(location);
      //console.log(coords.latitude, coords.longitude);

      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();      

      console.log(latitude, longitude);

      this.getWeather(latitude, longitude);      

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    };
  };
  componentDidMount(){
    this.getLocation();
  };
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
    //return <Loading />;
  };
};

/*export default function App() {
  return <Loading />;
}*/