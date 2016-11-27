import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


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


}



