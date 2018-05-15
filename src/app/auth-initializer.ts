import {APP_INITIALIZER} from '@angular/core';
import {AuthService} from './services/auth.service';


export let AuthInitializer = {
  provide: APP_INITIALIZER, useFactory: (authService: AuthService) => {
    return () => authService.initCurrentUserFromStorage();
  }, deps: [AuthService], multi: true
};
