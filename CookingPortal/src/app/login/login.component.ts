import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(@Inject(HttpClient) private client:any, @Inject(Router) private rt:any, 
  @Inject(StatusService) private status:any,private router: Router) { }

  ngOnInit(): void {
  }

  loginGroup = new FormGroup({
    email : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required)
  });

  validate():void {
    var email = this.loginGroup.get('email')!.value;
    var password = this.loginGroup.get('password')!.value;
    this.client.get("https://localhost:7137/api/Login/" + email + "/" + password).subscribe(
      (res:any)=>{
            //alert(JSON.stringify(res));
            localStorage.setItem("access_token",res.token);
            localStorage.setItem("auth","true");
            //localStorage.setItem("username",email);
            this.status.logged=true;
            this.rt.navigateByUrl("recipes"); 
            alert("Successfully Login"); 
      },
       (err:any)=>{
          alert("Invalid Credential");
        }
    );
  }

}
