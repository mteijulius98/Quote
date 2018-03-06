import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
 onSignup(form:any){
   this.authService.signup(form.value.username, form.value.email, form.value.password)
   .subscribe(
    resp =>alert('User Registered!'),
    error=>alert('error')
   );
 }
}
