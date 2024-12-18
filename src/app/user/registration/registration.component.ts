import { Component } from '@angular/core';
import { Form, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})

export class RegistrationComponent {
  form : any;

  constructor(public formBuilder : FormBuilder){
    this.form = this.formBuilder.group({
      fullName : [""],
      email : [""],
      password : [""],
      confirmPassword : [""]
    })
  }

  onSubmit(){
    console.log(this.form.value);
  }
  
}

