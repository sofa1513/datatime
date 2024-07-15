import { useState, useEffect } from 'react';
import axios from 'axios';

const useCity = () => {
    const [city, setCity] = useState('Loading...');
  
    useEffect(() => {
      fetch('https://ipapi.co/json/')
        .then((response) => response.json())
        .then((data) => {
          setCity(data.city);
        })
        .catch((error) => {
          setCity('Unknown');
        });
    }, []);
  
    return city.toUpperCase();
  };
  
  export default useCity;