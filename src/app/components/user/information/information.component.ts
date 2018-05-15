import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  currentUser: User;
  logged: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.logged = user != null;
      this.currentUser = this.authService.getUserLogged();
    });
  }
}
