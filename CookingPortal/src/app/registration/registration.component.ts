import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../registration';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  userGroup = new FormGroup({
    //id: string
     firstName : new FormControl("",Validators.required),
    lastName :  new FormControl("",Validators.required),
    mobile_No : new FormControl("", [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
     email : new FormControl("",Validators.required),
     password : new FormControl("",Validators.required),
     city : new FormControl("",Validators.required),
     age : new FormControl("",Validators.required), 
  });

  constructor(@Inject(RestService) private srvc:any, @Inject(Router) private rt:any) { }

  registeredUserList!: Registration[];

  ngOnInit(): void {
    this.srvc.getRegisteredUser().subscribe(
      (res:any)=>{
        this.registeredUserList=res as Registration[];
    },
    (err:any)=>{
        window.alert(JSON.stringify(err));
    }
    );
  }

  postUser():void {
    console.log(this.userGroup.value);
    this.srvc.postUser(this.userGroup.value).subscribe(
      (res:any)=>{
          alert('Registration Successfully Completed')
          this.userGroup.reset();
          this.rt.navigateByUrl("login"); 
      },
      (err:any)=>{
        alert(JSON.stringify(err));
      }
    );
  }

}
