import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  //emailControl: any;

  constructor(private route: Router, private loginService : LoginService) { }
  ngOnInit(): void {

  }

  Login() {
    if (this.loginService.login(this.email,this.password)) {
     // alert("Login successfully");
     this.route.navigate(['/rooms']);
    }
  }


}
