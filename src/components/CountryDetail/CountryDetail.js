import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryId} = useParams();
     const [countryDetail,setCountryDetail]   = useState([]);
     useEffect(() =>{
         const url =`
         https://restcountries.eu/rest/v2/name/${countryId}`;
         fetch(url)
         .then (res =>res.json())
         .then(data => setCountryDetail(data[0]))
     },[])
    return (
        <div style={{textAlign:'center',border:'1px solid black',margin:'20px',padding:'20px',boxShadow:'5px 5px 5px 5px gray',borderRadius:'20px'}}>
            
            <h2>{countryDetail.name}</h2>
            <p>population: {countryDetail.population}</p>
            <p>region: {countryDetail.region}</p>
            <p>area : {countryDetail.area}</p>
        </div>
    );
};

export default CountryDetail;