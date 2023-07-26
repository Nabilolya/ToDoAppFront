import { Injectable } from '@angular/core';
import { ITask } from '../model/task';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  url: string = "https://localhost:7038/api/Task"
  tasks: ITask[];
  task: ITask;
  constructor(private http:HttpClient) { }

  getAllTasks() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.tasks = res as ITask[];
        console.log(this.tasks);
      }
    )
  }

  postTask() {
    return this.http.post(this.url, this.task);
  }

  putTask() {
    return this.http.put(this.url, this.task);
  }
}
