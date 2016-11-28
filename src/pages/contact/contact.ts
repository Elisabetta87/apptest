import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {Geolocation} from "ionic-native";
import "rxjs/Rx";
import {Http} from "@angular/http";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {


  private apiKey: string = '&key=AIzaSyBYoX2EQECM35QOJh8541qhX2NcFGFvPZ4';



  location: {lat: number, lng: number};
  address: string;

  constructor(public platform:Platform,
              private http: Http
  ) {}


  getMapsLocation() {
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ this.location.lat +','+ this.location.lng + this.apiKey)
                    .map(data => JSON.parse(data['_body']))
                    .subscribe(details => {
                      this.address = details.results[0].formatted_address;
                      console.log(this.address);
                    })
  }



  getGeolocation() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };

      this.getMapsLocation();

    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }


}


