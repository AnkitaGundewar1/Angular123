import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login.model';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit{

  profileGroup =  new FormGroup ({
    //id: new FormControl(),
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

  ngOnInit(): void {

  }

  viewUser():void{
    this.rt.navigateByUrl("profile"); 
  }

  viewVeg():void{
    this.rt.navigateByUrl("veg"); 
  }

  viewNonVeg():void{
    this.rt.navigateByUrl("nonveg"); 
  }
}


