import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(logged => {
      this.isLoggedIn = logged;
      console.log(this.isLoggedIn);
    });
  }

}
