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
  addNewTitle: any;
  addListBtn: boolean;
  addListBtnText:any = "+ Add a List";
  listData: any = [];
  saveData: any;

  updateBtn: boolean;
  updateTitle: any;
  updateSnap: any;
  updateTimeMs: any;
  updateListTitle: any;

  listTitle: any;
  listBtn: boolean;
  dB: any = [];
  saveListData: any;
  listAddBtn: boolean = true;
  listTopic: any;

  constructor() { }

  ngOnInit() {
  }
  onMove(todo, position: number) {
    todo.moveTask(todo, position);
  }
  addListPop() {
    this.listBtn = true;
    this.listTitle = '';
  }
  addList() {
    this.listBtn = false;
    this.addListBtn = true;

    this.saveListData = {
      title: this.listTitle,
      created: new Date().getTime(),
      updated: new Date().getTime(),
      active: true,
      listData: []
    }
    this.dB.push(this.saveListData);
    if (this.dB.length > 0) {
      this.addListBtnText = "+ Add another List";
    }
    // this.dB[this.listTitle] = {title: this.listTitle};
    // console.log(this.dB);
    // this.listTopic = this.dB[this.listTitle].title;
    this.listAddBtn = false;
  }
  cancelList() {
    this.listBtn = false;
  }
  addNew(data) {
    this.addNewTitle = data.created;
    this.addBtn = true;
    this.updateBtn = false;
    this.storyTitle = '';
    this.storySnap = '';
  }

  saveStory(data) {
    this.addBtn = false;
    this.saveData = {
      title: this.storyTitle,
      snap: this.storySnap,
      listTitle: data.title,
      listCreated:data.created,
      created: new Date().getTime(),
      updated: new Date().getTime(),
      active: true
    }
    this.dB.filter(res => res.created == data.created)[0].listData.push(this.saveData);
    console.log('item dB', this.dB);
  }
  deleteStory(data) {
    // this.listData = this.listData.filter((res) => res.created !== data.created);
    data['active'] = false;
  }
  updatePop(data) {
    this.updateBtn = true;
    this.addBtn = false;
    this.updateTitle = data.title;
    this.updateListTitle = data.listCreated;
    this.updateSnap = data.snap;
    this.updateTimeMs = data.created;
    window.scrollTo(0, 70);
  }
  updateStory(data) {
    this.updateBtn = false;
    this.dB.forEach(res => {
      res.listData.forEach((res2) => {
        if (res2.created == this.updateTimeMs) {
          res2.title = this.updateTitle;
          res2.snap = this.updateSnap;
          res2.updated = new Date().getTime();
        }
      })

    })
  }
  cancelPop() {
    this.addBtn = false;
    this.updateBtn = false;
  }
}
