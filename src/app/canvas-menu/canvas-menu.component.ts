import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-menu',
  templateUrl: './canvas-menu.component.html',
  styleUrls: ['./canvas-menu.component.scss']
})
export class CanvasMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hidenav(){
    $('body').removeClass('nav-expanded');
  }
}
