import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location: {
    city: string,
    state: string
  }
  homeLocation: any;
  homeIcon: any;
  homeWeather: any;
  homeTemp: any;
  homeTempString: any;
  homeHumidity: any;
  homeDew: any;
  homeVis: any;
  homeHeat: any;


  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage 
    ) {

  }

  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Miami',
          state: 'FL'
        }
      }
      
      this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(result => {
        this.weather = result;
        this.homeLocation = this.weather.current_observation.display_location.full;
        this.homeIcon = this.weather.current_observation.icon_url;
        this.homeWeather = this.weather.current_observation.weather;
        this.homeTemp = this.weather.current_observation.temp_c;
        this.homeTempString = this.weather.current_observation.temperature_string;
        this.homeHumidity = this.weather.current_observation.relative_humidity;
        this.homeDew = this.weather.current_observation.dewpoint_string;
        this.homeVis = this.weather.current_observation.visibility_km;
        this.homeHeat = this.weather.current_observation.heat_index_string;
        console.log(this.weather);
      });
    });
  }
}
