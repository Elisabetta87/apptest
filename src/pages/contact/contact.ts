import {Component, ViewChild, OnInit, NgZone} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {
  Geolocation, GoogleMap, GoogleMapsEvent, GoogleMapsLatLng
} from "ionic-native";
import "rxjs/Rx";
import {Http} from "@angular/http";



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage implements OnInit{


  private apiKey: string = '&key=AIzaSyBYoX2EQECM35QOJh8541qhX2NcFGFvPZ4';






  @ViewChild('map') mapElement;
  private gMap: GoogleMap;

  location: {lat: number, lng: number};
  address: string;

  constructor(public navCtrl: NavController,
              public platform:Platform,
              private http: Http
  ) {}


  getMapsLocation() {
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+ this.location.lat +','+ this.location.lng +this.apiKey)
                    .map(data => JSON.parse(data['_body']))
                    .subscribe(details => {
                      this.address = details.results[0].formatted_address;
                      console.log(this.address);
                    })
  }


  ngOnInit(){

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


