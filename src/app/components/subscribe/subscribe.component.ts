import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectService } from 'src/app/services/connect.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  subUser = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(26),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(26),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(26),
    ]),
  });

  async submitSubUser() {
    await this.connectService.subscribe(this.subUser.value)
    this.router.navigate(['/']);
  }
  constructor(private router: Router,public connectService: ConnectService) { }

  ngOnInit(): void {
  }

}
