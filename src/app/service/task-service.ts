import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);
  
  addTask(task: string, stastus: string, priority: string) {
    this.tasks.update((previousState) => {
      return [...previousState, { task, status: stastus, priority }];
    });
  }

  updateTask(index: number, updatedTask: Task) {
    this.tasks.update(prev => {
      const copy = prev.slice();
      if (index >= 0 && index < copy.length) {
        copy[index] = updatedTask;
      }
      return copy;
    });
  }
}
