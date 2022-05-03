import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logUser = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(26),
    ]),
    // email: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(8),
    //   Validators.maxLength(26),
    // ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(26),
    ]),
  });
  submitLogUser() {
    this.connectService.login(this.logUser.value.username,this.logUser.value.password)
     this.router.navigate(['/']);
   }
 
   deconnect(){
    this.connectService.logout();
   }
  constructor(private router:Router, public connectService:ConnectService) { }

  ngOnInit(): void {
  }

}
