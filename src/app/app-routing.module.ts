import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  
  {
    path: "",
    redirectTo: "/tasks",
    pathMatch: "full",
  },
  {
    path: "tasks",
    component: TaskListComponent,
  },

  {
    path: "task/:id",
    component: TaskDetailComponent,
  },
  {
    path: "task",
    component: TaskFormComponent,
  },
];

@NgModule({
  imports: [
        CommonModule,
        RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}