import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  userFullName: string = '';
  isAuthenticated: boolean = false;
  storage : Storage = sessionStorage;


  constructor(private oktaAuthService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { }

  ngOnInit(): void {

    // Subscribe to authentication state changes
    this.oktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated!;
        this.getUserDetails();
      }
    );
  }

  getUserDetails() {
    if (this.isAuthenticated) {

      // Fetch the logged in user details
      // also the user name is displayed as a property name
      this.oktaAuth.getUser().then(
        (res) => {
          this.userFullName = res.name as string;

          // retrieve the user email from the authentication response
          const theEmail = res.email;

          // store the email in browser storage
          this.storage.setItem('userEmail', JSON.stringify(theEmail));
        }
      );
    }
  }


  logout() {
    // The session is terminated with Okta and removes current tokens
    this.oktaAuth.signOut();
  }

}
