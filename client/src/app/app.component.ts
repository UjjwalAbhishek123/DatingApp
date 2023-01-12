import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Dating App';
  users: any;

  //constructor is used for Dependency Injection
  constructor(private http: HttpClient) { }

  //we'll make a request to our API server
  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response, //assigning request to users variable
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }
}
