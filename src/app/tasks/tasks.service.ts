import { Injectable } from '@angular/core';
import { type NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.dummyTasks = JSON.parse(tasks);
    }
  }

  sendUserTasks(userID: string) {
    return this.dummyTasks.filter((task) => task.userId === userID);
  }

  RemoveTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
    this.saveTasksToLocalStorage();
  }

  makeNewTask(task: NewTask, userID: string) {
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      userId: userID,
      ...task,
    });
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }
}
