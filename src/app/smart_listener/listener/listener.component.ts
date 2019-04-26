import {Component, OnInit, NgModule, Renderer2, AfterViewInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {container} from '@angular/core/src/render3';
import {Service} from '../service';
import {FormArray} from '@angular/forms';



@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
  styleUrls: ['./listener.component.css'],

  animations: [
    trigger  ('ball' , [
      state('small' , style({   transform: 'scale(1)'})),
      state('big' , style({  transform: 'scale(0.70)'})) ,
      transition('*<=>*' , animate(300))
//// array in the transition  :
      // style only  : for the first pahse of transtion
      // animation  and style  : for the seconde phase of the transition  .
      // animation for the finale phase .
    ])] // when you have transition from  element  that you don't have it in the first place we call it void
})  // after   animation we add keyframe [ arraiy of the styles so there ] each style we take part of the
// animatiion time  .
 export class ListenerComponent implements AfterViewInit , OnInit {
  state = 'small' ;
  itop = 0 ;
  ibottom = 0 ;
  ileft = 0 ;
  iright = 0;
  containers = [];
  i = 0  ;
  clear : 0 ;
  colors = ['cadetblue', 'khaki', 'teal', 'red', 'darkgoldenrod', 'darkcyan', 'darkred', 'fuchsia'] ;


  constructor(private service: Service) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'big';
    }, 100);
  }
  onEnd(event) {

    if (this.state === 'big') {
      setTimeout(() => {
        this.state = 'small';
      }, 1000);
      } else {
        setTimeout(() => {
          this.state = 'big';
        }, 1000);
      }
    /*if ((this.i === 5)) {
      this.i = 0;
      this.itop = Math.max(60, Math.floor(Math.random() * 800));
      this.ileft = Math.floor(Math.random() * 1700);
      this.ibottom = Math.floor(Math.random() * 700);
      this.iright = Math.floor(Math.random() * 700);
      this.containers.push([this.itop, this.ileft, this.ibottom, this.iright, this.colors[Math.floor(Math.random() * this.containers.length)]]);
      console.log( this.clear++);
      if( this.clear === 20 ) {
        this.clear = 0;
        this.containers = [];
      }
    }*/


   // this.i = this.i + 1;



  }


  ngOnInit(): void {
    this.containers.push([500, 400, 0, 0, 'red']);

  }
  getid() {
    this.service.getData();
  }
  changestate() {
    this.itop = Math.max(60, Math.floor(Math.random() * 800)) ;
    this.ileft = Math.floor(Math.random() * 1700);
    this.ibottom = Math.floor(Math.random() * 700);
    this.iright = Math.floor(Math.random() * 700);
    this.containers.push([this.itop, this.ileft, this.ibottom, this.iright, this.colors[Math.floor(Math.random() * this.containers.length)]]);
  }
}
