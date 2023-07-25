import { Component } from '@angular/core';
import { ITask } from '../model/task';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(public TaskService : TaskServiceService) {
     
  }
  ngOnInit() {
    this.TaskService.getAllTasks();
  }

}
