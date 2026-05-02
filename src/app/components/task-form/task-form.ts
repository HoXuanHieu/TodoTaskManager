import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
})
export class TaskForm {
  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
    }),
    status: new FormControl('Todo', {
      nonNullable: true,
    }),
    priority: new FormControl('low', {
      nonNullable: true,
    }),
  });

  onSubmit() {
    console.log(this.taskForm.value);
    this.taskForm.reset();  
  }
}
