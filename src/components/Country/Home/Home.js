import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../../CountryMain/Country';

const Home = () => {
    const[countries, setCountries]=useState([]);
    useEffect(()=>{
      fetch ('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data) )
    },[])
    return (
        <div>
             <h1 style={{textAlign:'center'}}> <b>COUNTRY</b></h1>
   
   {
      countries.map(country => <Country country ={country} ></Country>)
    }
   
        </div>
    );
};

export default Home;