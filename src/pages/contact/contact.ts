import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation, GoogleMap, GoogleMapsEvent} from "ionic-native";



declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage {

  @ViewChild('map') mapElement;


  location: {lat: number, lng: number};


  constructor(public navCtrl: NavController) {

  }

  getGeolocation() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }
    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }

  getMapresults() {
    let map = new GoogleMap(this.mapElement);
     map.one(GoogleMapsEvent.MAP_READY).then((resp) => console.log('Map is ready!',resp));
  }


}
