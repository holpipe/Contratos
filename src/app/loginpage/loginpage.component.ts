import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  loginGoogle() {
    this.authService.googleLogin();
  }
}