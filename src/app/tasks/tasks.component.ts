import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userID!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}
  get selectedUsersTask() {
    return this.tasksService.sendUserTasks(this.userID);
  }

  onCompleteTask(id: string) {
    this.tasksService.RemoveTask(id);
  }

  onAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onNewTask(task: NewTask) {
    this.tasksService.makeNewTask(task, this.userID);
    this.isAddingTask = false;
  }
}
