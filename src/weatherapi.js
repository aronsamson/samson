import { useEffect,useState } from "react";
import axios from "axios";

const WeatherApp = () => {
  const[WeatherData,setWeatherData] =useState (null);
  const[City,setCity] = useState('');
  const[error,setError] =useState('');

  'Your API Key' = '9gt7yoGOScQz6VrrIxr7IMLphYwMKDwz';
  const getWeather = async () => (

    try{
      const response = await axios.get('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=9gt7yoGOScQz6VrrIxr7IMLphYwMKDwz')
      setWeatherData(response.data);   
    }
    catch (error) {
      setWeatherData(null);
      setError('city not found!please enter valid city');
    }

  )

  }
