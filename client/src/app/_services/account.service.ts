import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //property for baseUrl
  baseUrl = "https://localhost:5001/api/";

  private currentUserSource= new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  //injecting HttpClient into the constructor
  constructor(private http: HttpClient) { }

  login(model: any){
    //chaining pipe() to transform data or to do something with data as it comes back from our API server
    //have to give the response type to http.post as post<User>, else it will give error
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        //storing response in variable 'user'
        const user = response;

        //checking if we have a user
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.setCurrentUser(user);
        }
      })
    );
  }

  register(model: any){
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      //chaining with pipe() to do something with observable before the component subscribe to it
      map(user => {
        //checking if we have a user
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        // return user;
      })
    )
  }

  //it'll be used from our component just to go ahead and set this info inside our account service
  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    //removing the items from local storage
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
