import { Component, OnInit } from '@angular/core';
import { Task } from 'src/taskModel';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  model: Task = new Task()
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log("Submit Successful: ", this.model);
  }
  
}
