import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/taskModel';
import { TaskDataService } from '../task-data.service';

@Component({
  selector: "app-task-detail",
  templateUrl: "./task-detail.component.html",
  styleUrls: ["./task-detail.component.css"],
})
export class TaskDetailComponent implements OnInit {
  myTask: Task;
  id: number;

  @Input() task: Task;
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  
  constructor(
    private taskData: TaskDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params["id"];
      this.taskData.getTaskById(this.id).subscribe((t) => (this.myTask = t));
    });
  }

  onClickDelete() {
    this.taskDeleted.emit(this.task.id);
  }
}
