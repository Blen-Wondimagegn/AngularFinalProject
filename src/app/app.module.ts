import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import  {HttpClientModule} from '@angular/common/http';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';



@NgModule({
    declarations: [AppComponent, TaskListComponent, TaskFormComponent, TaskDetailComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}