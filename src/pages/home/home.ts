import { Component, ElementRef, ViewChild } from '@angular/core';
import WebSocket from 'ws'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('canvasTop') canvasTop : ElementRef;
  @ViewChild('canvasTop') canvasLeft : ElementRef;
  @ViewChild('canvasTop') canvasRight : ElementRef;
  @ViewChild('canvasTop') canvasBottom : ElementRef;
  private _CANVAS_TOP  : any;
  private _CONTEXT_TOP : any;
  private _CANVAS_LEFT  : any;
  private _CONTEXT_LEFT : any;
  private _CANVAS_RIGHT  : any;
  private _CONTEXT_RIGHT : any;
  private _CANVAS_BOTTOM  : any;
  private _CONTEXT_BOTTOM : any;

  private _WS : any

  ionViewDidLoad() {
    console.log('ION did load ;)')
    this._WS = new WebSocket('ws://demos.kaazing.com/amqp')

    this._WS.on('message', data => {
      console.log('Message from WS!')
      console.log(data)
    })
  }


}
