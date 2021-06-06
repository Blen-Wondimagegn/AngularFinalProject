import { Component, OnInit } from '@angular/core';
import { Task } from 'src/taskModel';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  task: Task[];
  dataService: TaskDataService;

  constructor(private listData: TaskDataService) {
    // this.listData.getTask().subscribe((t) => (this.task = t));
    this.dataService = this.listData;
  }

  ngOnInit(): void {
    this.dataService.getTask().subscribe((t) => (this.task = t));
  }

  onTaskDeleted(taskId) {
    let taskIndex = 0;
    for (let t of this.task) {
      if (t.id === taskId) {
        this.task.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }
}

