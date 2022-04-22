const getCountries = () => {
const xhr =new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";

xhr.onload=()=>{
    const countries=xhr.response;
    // const countryNames=countries.map((country)=>country.name.common);
    // console.log("list of countries",countryNames);
    // const population=countries.map((country)=>country.population.common);
    // console.log('list of countries',population);
   // console.log("list of countries",countries);
    for(let names of countries){
        console.log(names.population);
        console.log(names.altSpellings);
    }
};
};
getCountries();
