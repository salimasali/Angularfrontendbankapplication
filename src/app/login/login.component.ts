import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Welcome to SBL Bank"

  acno = "Account Number Please"
  pswd = ""
  loginForm = this.fb.group({

    acno: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      var acno = this.loginForm.value.acno;
      var pswd = this.loginForm.value.pswd;
      this.ds.login(acno, pswd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem("userName",result.userName)
          localStorage.setItem("currentAcc",result.currentAcc)
          this.router.navigateByUrl("dashboard")
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
      // if (result) {
      //   alert("login successfully")
        
      // }
    }
    else {
      alert("invalid form")
    }
  }
}

