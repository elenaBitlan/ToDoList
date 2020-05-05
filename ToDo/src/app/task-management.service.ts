import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task, TaskContent } from './list/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskManagementService {
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<{ message: string; tasks: Task[] }>('task');
  }

  addTask(task: TaskContent) {
    return this.http.post('task', task);
  }

  removeTask(task) {
    return this.http.delete('task/' + task._id);
  }

  updateTask(task) {
    return this.http.put('task/' + task._id, task);
  }
}
