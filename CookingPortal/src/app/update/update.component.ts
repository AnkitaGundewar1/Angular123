import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  
  userGroup = new FormGroup({
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

  Data:any;

  // ngOnInit(): void {
  //   this.route.queryParams.subscribe(params => {
  //     this.Data = JSON.parse(params['event']);
  //    console.log(this.Data);
  //   });
  // }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
       this.Data = JSON.parse(params['data']);
      console.log(this.Data);
      console.log(this.Data.id);

    });
  }
  updateUser():void 
  {
    var id = this.userGroup.get('id')?.value;
    this.client.put("https://localhost:7137/api/UserProfile", this.userGroup.value).subscribe(
    (res:any)=>{
      alert("User Profile updated");
      this.userGroup.reset();
      this.rt.navigateByUrl("profile");
    },
    (err:any)=>{
      window.alert(JSON.stringify(err));
    }
    );
  }
}
