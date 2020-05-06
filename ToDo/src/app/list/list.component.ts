import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TaskManagementService } from '../task-management.service';
import { Task, TaskContent } from './task.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  form: FormGroup;
  taskList: Task[] = [];
  isUpdated = true;
  constructor(public taskService: TaskManagementService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      content: new FormControl(null, {
        validators: [Validators.required],
      }),
    });

    this.taskService.getTasks().subscribe((response) => {
      this.taskList = [...response.tasks];
    });
  }

  onTaskSave() {
    const content = this.form.value.content;
    if (!content || !content.trim().length) {
      return;
    }

    this.isUpdated = false;
    const taskContent = new TaskContent(this.form.value.content);
    this.taskService
      .addTask(taskContent)
      .subscribe((res: { message: string; task: Task }) => {
        this.taskList.push(res.task);
        this.form.reset();
        this.isUpdated = true;
      });
  }

  onTaskDelete(task) {
    this.taskService.removeTask(task).subscribe(() => {
      this.taskList = this.taskList.filter((oldTask) => {
        return oldTask._id !== task._id;
      });
    });
  }

  onTaskResolve(task) {
    this.isUpdated = false;
    task.resolved = !task.resolved;
    this.taskService.updateTask(task).subscribe(() => {
      this.isUpdated = true;
    });
  }
}
