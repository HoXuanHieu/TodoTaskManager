import { Injectable, signal } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<Task[]>([]);
  
  addTask(task: string, stastus: string, priority: string) {
    this.tasks.update((previousState) => [...tasks, task]);
  }
}
