import { Component, Input } from '@angular/core';

import { TaskManagementService } from '../task-management.service';
import { Task } from '../list/task.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() task: Task;
  @Input() index: number;
  constructor(public taskService: TaskManagementService) {}

  onTaskDelete(task) {
    this.taskService.removeTask(task);
  }

  onTaskResolve(task, index) {
    const currentState = !task.resolved;
    this.taskService.updateTask({ ...task, resolved: currentState }, index);
  }
}
