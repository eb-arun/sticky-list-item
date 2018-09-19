import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  storyTitle:any;
  storySnap:any;
  addBtn:boolean;
  saveSection:boolean;

  constructor() { }

  ngOnInit() {
  }
  addNew () {
    this.addBtn = true;
  }

  saveStory() {
    this.addBtn = false;
  }
}
