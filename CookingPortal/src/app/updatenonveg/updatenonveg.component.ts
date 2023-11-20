import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-updatenonveg',
  templateUrl: './updatenonveg.component.html',
  styleUrls: ['./updatenonveg.component.css']
})
export class UpdatenonvegComponent implements OnInit {

  vegGroup = new FormGroup({
    
    recipe_Id: new FormControl(),
    recipe_Name : new FormControl(),
    recipe_Price :  new FormControl(),

  });

  constructor(@Inject(RestService) private srvc:any, private route: ActivatedRoute,
  private common:RestService, @Inject(HttpClient) private client:any ,private router:Router, @Inject(Router) private rt:any) { }

  Data:any;

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
       this.Data = JSON.parse(params['data']);
      console.log(this.Data);
      console.log(this.Data.id);

    });
  }

  updateNonVeg():void 
  {
    var id = this.vegGroup.get('id')?.value;
    this.client.put("https://localhost:7137/api/NonVeg_Recipes", this.vegGroup.value).subscribe(
    (res:any)=>{
      alert("Recipe Successfully updated !");
      this.vegGroup.reset();
      this.rt.navigateByUrl("nonveg");
    },
    (err:any)=>{
      window.alert(JSON.stringify(err));
    }
    );
  }
}