import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addItem(item: HTMLInputElement) {
    console.log(item);
    this.items.push(item.value);
    item.value = '';
    item.focus();
  }

}
