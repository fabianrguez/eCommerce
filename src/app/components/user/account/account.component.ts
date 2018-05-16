import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {User} from '../../../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  options: any[] = [];
  currentUser: User;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.initializeOptions();
  }

  async logOut() {
    await this.router.navigate(['/productos']);
    await this.authService.logOut();
  }

  private initializeOptions() {
    this.currentUser = this.authService.getUserLogged();
    this.options.push({label: 'Mis Pedidos', redirectTo: '/pedidos'});
    this.options.push({label: 'Mi Información', redirectTo: `/usuario/${this.currentUser.id}/informacion`});
  }
}
