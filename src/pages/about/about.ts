import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CallNumber} from 'ionic-native';
//CallNumber
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  /*lat and lng office*/
  title: string = 'Office location';
  lat: number = 51.5269772;
  lng: number = -0.0905013;



  constructor(public nav: NavController) {

  }


  callOffice(ev) {
     CallNumber.callNumber(ev.target.innerText, true)
     .then(() => console.log('call!'))
     .catch(() => console.log('error'));
    console.log(ev.target.innerText);
  }


}



