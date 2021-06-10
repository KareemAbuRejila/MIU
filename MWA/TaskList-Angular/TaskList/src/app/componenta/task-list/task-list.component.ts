import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() tasks:Task[]=[];
  @Input() loading=false;
  
  @Output()
  onPinTask=new EventEmitter<Event>();
  @Output()
  onArchiveTask=new EventEmitter<Event>();

}
