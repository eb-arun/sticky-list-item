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
  listData:any = [];
  saveData:any;

  constructor() { }

  ngOnInit() {
  }
  addNew () {
    this.addBtn = true;
    this.storyTitle='';
    this.storySnap='';
  }

  saveStory() {
    this.addBtn = false;
    this.saveData = {
      title:this.storyTitle,
      snap:this.storySnap,
      created:new Date().getTime(),
      active:true
    }
    this.listData.push(this.saveData);
    console.log('listData', this.listData);
  }
  deleteStory(data) {
    this.listData = this.listData.filter((res) =>res.created !== data.created);

  }
}
