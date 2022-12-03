import { Component } from '@angular/core';
import {UsersService} from "./users.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'railway-ng-front';
  users$: Observable<any> = of([]);
  constructor(private usersService: UsersService) {
    console.log('AppComponent constructor');
    this.getUsers()
  }

  getUsers() {
    this.users$ = this.usersService.getUsers();
  }


}
