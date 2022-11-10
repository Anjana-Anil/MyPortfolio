import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  ngOnInit(){
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyB-PWlPkdp_D6J5dJJ07WYINHBPrXYr-Qw",
  // authDomain: "portfolio-82248.firebaseapp.com",
  // projectId: "portfolio-82248",
  // storageBucket: "portfolio-82248.appspot.com",
  // messagingSenderId: "453306904361",
  // appId: "1:453306904361:web:becd38a56f4bf8cb34d138"
  //   })
  }
}
