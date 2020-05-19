import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { TaskManagementService } from '../task-management.service';
import { Task } from './task.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  form: FormGroup;
  taskList$: Observable<Task[]>;
  isUpdated = true;
  constructor(public taskService: TaskManagementService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      content: new FormControl(null, {
        validators: [Validators.required],
      }),
    });

    this.taskList$ = this.taskService.getTasks;
  }

  onTaskSave() {
    const content = this.form.value.content;
    if (content && content.trim().length) {
      this.taskService.addTask({
        id: Math.random().toString(),
        content: this.form.value.content,
        resolved: false,
      });
      this.form.reset();
    }
  }
}
