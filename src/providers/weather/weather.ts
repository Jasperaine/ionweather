import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
@Injectable()
export class WeatherProvider {
  apiKey = 'e6b79746b6d271f3';
  url;
  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

    getWeather(city, state){
      return this.http.get(this.url+'/'+state+'/'+city+'.json');
    }
}
