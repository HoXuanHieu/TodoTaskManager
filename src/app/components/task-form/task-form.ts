import { Component , inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../../service/task-service';
@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
})
export class TaskForm {
taskService = inject(TaskService);

  taskForm = new FormGroup({
    task: new FormControl('', {
      nonNullable: true,
    }),
    status: new FormControl('Planning', {
      nonNullable: true,
    }),
    priority: new FormControl('low', {
      nonNullable: true,
    }),
  });

  onSubmit() {
    // console.log(this.taskForm.value);
    const rawValue = this.taskForm.getRawValue();
    this.taskService.addTask(
      rawValue.task,
      rawValue.status,
      rawValue.priority
    );
    this.taskForm.reset();  
  }
}
