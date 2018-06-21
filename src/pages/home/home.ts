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

  private _WS : any

  connect() {
    console.log('Connecting...')
    //With ionic debug server running, this crashes with CORS disabled. 
    this._WS = new WebSocket('wss://echo.websocket.org/', {
      origin: 'https://echo.websocket.org'
    });

    this._WS.on('open', () => this.handleConnectionOpened())
    this._WS.on('message', mess => this.handleMessageReceived(mess))
    this._WS.on('error', err => this.handleErrorReceived(err))

  }

  handleConnectionOpened() {
    this._WS.send('ECHOOO')  
  }

  handleMessageReceived(message) {
    alert(message)
  }

  handleErrorReceived(err) {
    alert(JSON.stringify(err))
  }
}
