import { Component, OnInit } from '@angular/core';

import { AppComponent } from "../app.component";

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private app:AppComponent) { }

  ngOnInit() {
  }

}
