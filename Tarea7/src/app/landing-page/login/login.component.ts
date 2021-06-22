import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router:Router) { 
    this.registerForm = this.fb.group({
      
      userName: ['', Validators.required],
      
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (true) {
      console.log("hola mundo");
   }
  }


  onEvent() {
    this.router.navigate(['/admin'])
  }

  
  get f() {
    return this.registerForm.controls
  }
  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid) {
      return;
    }

    console.log( JSON.stringify(this.registerForm.value, null, 4));

  }
}
