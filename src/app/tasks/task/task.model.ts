export interface Task {
  id: string;
  userId: string;
  title: string;
  dueDate: string;
  summary: string;
}

export interface NewTask {
  title: string;
  summary: string;
  dueDate: string;
}
