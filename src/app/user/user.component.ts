import { Component, Input, input, computed } from '@angular/core';
// import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `assets/images/users/${this.avatar()}`);
  get imagePath() {
    return `assets/images/users/${this.avatar}`;
  }

  onSelectUser() {}
}

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
