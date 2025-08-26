import {
  Component,
  Input,
  input,
  computed,
  output,
  Output,
  EventEmitter,
} from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  get imagePath() {
    return `assets/images/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

// import { Component, signal, computed } from '@angular/core';

// avatar = input.required<string>();
// name = input.required<string>();
// select = output<string>();

// imagePath = computed(() => `assets/images/users/${this.avatar()}`);

// export class UserComponent {
//   // selectedUser = DUMMY_USERS[randomIndex];
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(
//     () => `assets/images/users/${this.selectedUser().avatar}`
//   );
//   // get imagePath() {
//   //   return `assets/images/users/${this.selectedUser.avatar}`;
//   // }

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     // this.selectedUser = DUMMY_USERS[randomIndex];
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//     console.log('Selected User:', this.selectedUser);
//   }
// }
