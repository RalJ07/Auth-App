import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styles: [
  ]
})
export class DashboardLayoutComponent {

  private authService = inject(AuthService);

  public user = computed( () => this.authService.currentUser() );

  onLogOut() {
    this.authService.logOut();
  }

  // get user() {
  //   return this.authService.currentUser()
  // }
}
