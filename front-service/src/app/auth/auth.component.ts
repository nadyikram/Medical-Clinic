import { Component, OnInit,Input } from '@angular/core';
import{ AuthService} from '../services/auth.service';
import{UserService} from "../services/user.service";
import { User } from '../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/Forms';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  userForm: FormGroup;

  @Input() lastname: string;  
  @Input() motdepasse: string;

  constructor(private formbuilder: FormBuilder, private userService: UserService, private authService:AuthService, private router: Router) { }

  ngOnInit() {
  	this.authStatus  = this.authService.isAuth;
  }

  onSignIn(){
  		this.authService.signIn().then(
  			() => {
  				this.authStatus = this.authService.isAuth;
  				this.router.navigate(['medecins']);
  				 
  			}
  		);
  }

  onSignUp(){
          this.router.navigate(['/new-user']);
  }


  onSignOut(){
  	this.authService.signOut();
  	this.authStatus = this.authService.isAuth;
  }

  onSubmitConnexion(formulaire : NgForm){

     const lastname = formulaire.value['lastname'];
     const motdepasse = formulaire.value['motdepasse'];

     if(this.userService.verificationUser(lastname,  motdepasse)) {
              this.lastname = lastname;
              this.motdepasse = motdepasse;
              this.onSignIn();
     }
  }

  getlastname(){
      return this.lastname;
  }



}
