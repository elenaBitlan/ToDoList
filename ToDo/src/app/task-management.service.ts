import { Injectable } from '@angular/core';

import { TaskInterface } from './list/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskManagementService {
  private _tasks: BehaviorSubject<TaskInterface[]>;

  constructor() {
    this._tasks = new BehaviorSubject<TaskInterface[]>([]);
  }

  get getTasks() {
    return this._tasks.asObservable();
  }

  addTask(task: TaskInterface): void {
    this._tasks.next([...this._tasks.value, task]);
  }

  removeTask(task: TaskInterface): void {
    this._tasks.next(
      this._tasks.value.filter((oldTask) => oldTask.id !== task.id)
    );
  }

  updateTask(task: TaskInterface, index: number) {
    const tasks = [...this._tasks.value];
    tasks[index] = task;
    this._tasks.next(tasks);
  }
}
