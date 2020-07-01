import React from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';

import {fetchData} from './api';
import coronaimage from './images/image.png';
import hikingLogo from './images/hiking-logo.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount () {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});

        // console.log(fetchedData);
    }

    handleCountryChange = async (country) =>{
      const fetchedData = await fetchData(country);


      // console.log(fetchedData); 
      this.setState({data: fetchedData, country:country});
      //fetch data
      //set the state
    } 



    render(){
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
              <a href="http://www.hikingadventuretreks.com">
              <img className={styles.logo} src={hikingLogo} alt="hiking-logo"/></a>
              <img className={styles.image} src={coronaimage} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <h3 className={styles.websiteTitle}>About Hiking Adventure Treks</h3>
                <span> Covid-19 has affected many businesses across the world. Among them, we are also one. At this time, we are doing our best to make sure that our staff members are safe and looked after for. We are asking them to work from home. Travel industry is severely disrupted by the virus since most countries have still not opened their borders. We urge you to stay safe and keep in touch with us via our website and to know when we open our trekking and travel services to you.</span>
                <a className={styles.button} href="http://www.hikingadventuretreks.com">Go to HomePage</a>
            </div>
        )
    }
}

export default App;