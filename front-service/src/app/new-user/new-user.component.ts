import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{UserService} from "../services/user.service";
import { Router } from '@angular/router';
import { User } from '../models/user.model';



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
	 
 userForm: FormGroup;	 

  constructor(private formbuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  this.initFrorm();
  }

  initFrorm(){
  	this.userForm = this.formbuilder.group(
  	{
  		firstname:['', Validators.required],
  		lastname: ['', Validators.required],
  		age: ['', Validators.required],
  		gender: ['', Validators.required],
  		phone : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
  		email: ['', [Validators.required, Validators.email]],
  		motdepasse: ['', [Validators.required , Validators.minLength(8)]]
  	});
  }

   onSubmitForm() {
    const formValue = this.userForm.value;

    const newUser = new User(
      formValue['firstname'],
      formValue['lastname'],
      formValue['age'],
      formValue['gender'],
      formValue['phone'],
      formValue['email'],
      formValue['motdepasse']
    );
    this.userService.addUser(newUser);
    this.router.navigate(['/user']);
  }

}
