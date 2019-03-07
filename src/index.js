import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Container from './Container';
import Crumb from './Crumb';
import Weather from './Weather'
import Search from './Search';

const baseUrl = 'https://api.apixu.com/v1/current.json?'
const apiKey = 'key=e0a8080b3f0b46fab2d200351191902'
const query = '&q=Sunrise,FL'

const getWeather = () => {
    axios.get(`${baseUrl}${apiKey}${query}`)
    .then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    });   
}

getWeather();

class App extends React.Component {
    render() {
        return (
            <Container>
                <Search />
                <Crumb />

                <Container>
                    <Weather/>
                </Container>
            </Container>


        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

