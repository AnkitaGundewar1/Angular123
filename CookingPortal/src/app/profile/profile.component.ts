import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
    profileGroup = new FormGroup({
    id: new FormControl(),
    firstName : new FormControl(),
    lastName :  new FormControl(),
    mobile_No : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    city : new FormControl(),
    age : new FormControl(), 


 });


  constructor(@Inject(RestService) private srvc:any, private route: ActivatedRoute,
  private common:RestService, @Inject(HttpClient) private client:any ,private router:Router, @Inject(Router) private rt:any) { }

  userList : any;
  result : any;
  edit: any;

  ngOnInit(): void {
    this.srvc.getRegisteredUser().subscribe(
      (res:any)=>{
          this.userList=res;
          console.log(this.userList);
          //alert(this.userList);
      },
      (err:any)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }
  editData:any;

  EditUser(event:any):void {
    console.log(event);
    this.editData = event;
    console.log(this.editData);

    var id = this.profileGroup.get('id')?.value;
    this.srvc.getRegisteredUser(id).subscribe(
      (res:any)=>{
        this.profileGroup.patchValue(res);
        console.log(res);
        //console.log(res[0].id);
        //this.rt.navigateByUrl("update",event);  
        this.router.navigate(['update'], { queryParams: { data: JSON.stringify(this.editData) } });
    },
    (err:any)=>{
        window.alert(JSON.stringify(err));
    }
    );
  }
}
