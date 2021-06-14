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
      
      userName: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_-]{3,16}$')
       ]
      ],
      
      password: ['', [
        Validators.required,
        Validators.pattern('(?=(.*[0-9]))(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*)).{8,}')
        ]
      ]
    });
  }
  ngOnInit(): void {
    if (true) {
      console.log("hola mundo");
   }
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
