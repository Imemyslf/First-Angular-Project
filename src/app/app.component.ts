import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

//RouterOutlet,
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: string;

  get getSelectedUser() {
    return this.users.find((user) => user.id === this.selectedUser);
  }

  onSelectUser(id: string) {
    this.selectedUser = id;
  }
}

// export class AppComponent {
//   users = DUMMY_USERS;
//   foundUser: string | null = null;

//   onSelectUser(id: string) {
//     const user = this.users.find((user) => user.id === id);
//     this.foundUser = user ? user.name : null;
//     console.log('Selected User:', this.foundUser);
//     // console.log('Selected User ID:', id);
//   }
// }
