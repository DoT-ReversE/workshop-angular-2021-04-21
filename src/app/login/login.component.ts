import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  setData(user: User): void {

  }

  ngOnInit(): void {
    this.users = [
      new User(1, "User 01", "Last 01", "xxx@demo1.com"),
      new User(2, "User 02", "Last 02", "xxx@demo2.com"),
    ]
  }

}
