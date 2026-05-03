import { Component, computed, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../service/task-service';

@Component({
  selector: 'app-panel-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-item.html',
  styleUrls: ['./panel-item.css'],
})
export class PanelItem {
  taskInfo = input.required<Task>();
  index = input.required<number>();
  private taskService = inject(TaskService);

  statusValues = ['Planning', 'In Progress', 'Completed'];
  priorityValues = ['High', 'Medium', 'Low'];

  action = computed(() => {
    const task = this.taskInfo();
    return this.statusValues.filter(status => status !== task.status);
  });

  priorityColor = computed(() => {
    const p = this.taskInfo().priority;
    if (p === 'High') return 'red';
    if (p === 'Medium') return '#bfdbfe'; // light blue
    return 'gray';
  });

  changeStatus(newStatus: string) {
    const idx = this.index();
    const t = this.taskInfo();
    this.taskService.updateTask(idx, { ...t, status: newStatus });
  }

  changePriority(newPriority: string) {
    const idx = this.index();
    const t = this.taskInfo();
    this.taskService.updateTask(idx, { ...t, priority: newPriority });
  }
}
