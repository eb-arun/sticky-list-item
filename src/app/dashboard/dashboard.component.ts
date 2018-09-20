import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  storyTitle: any;
  storySnap: any;
  addBtn: boolean;
  listData: any = [];
  saveData: any;

  updateBtn: boolean;
  updateTitle: any;
  updateSnap: any;
  updateTimeMs:any;

  constructor() { }

  ngOnInit() {
  }
  addNew() {
    this.addBtn = true;
    this.updateBtn = false;
    this.storyTitle = '';
    this.storySnap = '';
  }

  saveStory() {
    this.addBtn = false;
    this.saveData = {
      title: this.storyTitle,
      snap: this.storySnap,
      created: new Date().getTime(),
      updated: new Date().getTime(),
      active: true
    }
    this.listData.push(this.saveData);
    console.log('listData', this.listData);
  }
  deleteStory(data) {
    this.listData = this.listData.filter((res) => res.created !== data.created);
  }
  updatePop(data) {
    this.updateBtn = true;
    this.addBtn = false;
    this.updateTitle = data.title;
    this.updateSnap = data.snap;
    this.updateTimeMs = data.created;
    window.scrollTo(0, 70);
  }
  updateStory() {
    this.updateBtn = false;
    this.listData.forEach(res => {
      if (res.created == this.updateTimeMs) {
        res.title = this.updateTitle;
        res.snap = this.updateSnap;
        res.updated = new Date().getTime(); 
      }
    })
  }
  cancelPop() {
    this.addBtn = false;
    this.updateBtn = false;
  }
}
