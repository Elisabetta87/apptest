import {Component, ViewChild, OnInit, NgZone} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {
  Geolocation, GoogleMap, GoogleMapsEvent, GoogleMapsMarker, GoogleMapsMarkerOptions,
  CameraPosition, GoogleMapsLatLng
} from "ionic-native";
import {Observable} from "rxjs/Rx";



// declare var google;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})


export class ContactPage implements OnInit{

  @ViewChild('map') mapElement;
  private gMap: GoogleMap;

  location: {lat: number, lng: number};

  constructor(public navCtrl: NavController,
              public platform:Platform
  ) {}

  ngOnInit(){

  }

  getGeolocation() {
    Geolocation.getCurrentPosition().then((resp) => {
      this.location = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      }

      console.log( new GoogleMapsLatLng(this.location.lat,  this.location.lng) );

    }).catch((error) => {
      console.log('Error getting location', error);
    });


  }

  getMapresults() {
    //console.log(this.mapElement, GoogleMapsEvent);

    this.platform.ready().then(()=>{
      console.log('Platform ready!');

      this.gMap = new GoogleMap('mapid');


      this.gMap = new GoogleMap('mapid', {
        'backgroundColor': 'white',
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        },
        'camera': {
          'latLng': new GoogleMapsLatLng(-34.9290,138.6010),
          'tilt': 30,
          'zoom': 15,
          'bearing': 50
        }
      });

      this.gMap.on(GoogleMapsEvent.MAP_READY)
          .subscribe(()=>{
            //console.log(this.gMap);
          });
    })
    .catch(err => { console.log(err); });

     //let gMap = new GoogleMap(this.mapElement);


     //this.gMap.on(GoogleMapsEvent.MAP_READY).subscribe(data => { console.log(data); });

    //.then(() =>{ console.log('Map is ready!') });
//     let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);
//
//     let position: CameraPosition = {
//       target: ionic,
//       zoom: 18,
//       tilt: 30
//     };
//
// // move the map's camera to position
//     map.moveCamera(position);
//
// // create new marker
//     let markerOptions: GoogleMapsMarkerOptions = {
//       position: ionic,
//       title: 'Ionic'
//     };
//
//     map.addMarker(markerOptions)
//       .then((marker: GoogleMapsMarker) => {
//         marker.showInfoWindow();
//       });
  }
}


/*

 <!--<button padding ion-button full color="mygreen">Get me there</button>-->
 <!--<ion-list>
 <ion-item>
 <ion-icon name="search" item-left></ion-icon>
 <button ion-button padding round full (click)="getGeolocation()">
 My location
 </button>
 </ion-item>
 <ion-item>
 <div *ngIf="location">
 <h3>Latitude: {{location.lat}}</h3>
 <h3>Longitude: {{location.lng}}</h3>
 </div>
 </ion-item>
 <ion-item #map>
 <button (click)="getMapresults()"></button>
 </ion-item>
 </ion-list>-->

* */
