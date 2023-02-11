import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  //property to store what user completes in form
  model: any = {};

  //property to specify whether or not user is logged in
  // loggedIn = false;

  // currentUser$: Observable<User | null> = of(null);

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // this.getCurrentUser();
    // this.currentUser$ = this.accountService.currentUser$;
  }

  //checking if user is currently logged in
  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe({
  //     next: user => this.loggedIn = !!user,
  //     error: error => console.log(error)
  //   })
  // }

  //Login function
  login() {
    this.accountService.login(this.model).subscribe({
      //next: ()=> or next: _ =>, can be written
      next: _ => {
        //it will take screen to membersList page on logging in
        this.router.navigateByUrl('/members');

        // this.loggedIn = true;
        //now it is not required
      },
      error: error => this.toastr.error(error.error),
    });
  }

  //Logout function
  logout() {
    this.accountService.logout(); //it will remove the item from local storage
    this.router.navigateByUrl('/');
    // this.loggedIn = false;
    //now it is not required
  }
}
