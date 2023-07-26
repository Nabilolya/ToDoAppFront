import { Component } from '@angular/core';
import { TaskServiceService } from '../service/task-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(public TaskService : TaskServiceService) {
    this.TaskService.task = {
      id: 0,
      description: null
    }
  }

  onSubmit(form: NgForm) {
    if(this.TaskService.task.id===0){
    this.TaskService.postTask().subscribe(res => {
      console.log(this.TaskService.task);
      this.TaskService.getAllTasks()
    },
      err => {
      console.log("we have an error "+err)
      })
    } else {
      this.TaskService.putTask().subscribe(res => {
        console.log(this.TaskService.task);
        this.TaskService.getAllTasks()
      },
        err => {
        console.log("we have an error "+err)
        })
    }
  }

}
