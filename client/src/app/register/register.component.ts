import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  //we don't need to pass our users down from home component, as that's not a part of our register form, so removed @Input()
  //@Input() userFromHomeComponent: any;
  
  //to emit something from child component to parent component
  @Output() cancelRegister = new EventEmitter();

  model: any = {}
  
  constructor(private accountService: AccountService) { }

  ngOnInit(): void{
  }

  register(){
    // console.log(this.model);
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.log(error)
    })
  }

  cancel(){
    //to turn off the registerMode in home component
    this.cancelRegister.emit(false);
  }
}
