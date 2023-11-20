import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-nonveg',
  templateUrl: './nonveg.component.html',
  styleUrls: ['./nonveg.component.css']
})
export class NonvegComponent implements OnInit {

  vegGroup = new FormGroup({
    
    Recipe_Id: new FormControl(),
    Recipe_Name : new FormControl(),
    Recipe_Price :  new FormControl(),

  });

  constructor(@Inject(RestService) private srvc:any,  private router:Router, @Inject(HttpClient) private client:any, @Inject(Router) private rt:any) { }

  nonVegList : any;

  ngOnInit(): void {
    this.srvc.getNonVegRecipes().subscribe(
      (res:any)=>{
          this.nonVegList=res;
          console.log(res);
          //alert(this.nonVegList);
      },
      (err:any)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

  editData:any;

  EditNonVeg(event:any):void {
    console.log(event);
    this.editData = event;
    console.log(this.editData);

    var id = this.vegGroup.get('id')?.value;
    this.srvc.getRegisteredUser(id).subscribe(
      (res:any)=>{
        this.vegGroup.patchValue(res);
        console.log(res);
        this.router.navigate(['updatenonveg'], { queryParams: { data: JSON.stringify(this.editData) } });
    },
    (err:any)=>{
        window.alert(JSON.stringify(err));
    }
    );
  }

  addRecipe():void {
    this.rt.navigateByUrl("addnonveg"); 
  }

  deleteRecipe(recipe_Id:any):void {
    
    //alert(recipe_Id);
    this.client.delete("https://localhost:7137/api/NonVeg_Recipes/" + recipe_Id).subscribe(
      (res:any)=>{
        this.nonVegList = this.nonVegList.filter((recipe: { recipe_Id: any; }) => recipe.recipe_Id !== recipe_Id);
          this.vegGroup.reset();
          alert("Recipe deleted");
      },
      (err:any)=>{
          window.alert(JSON.stringify(err));
      }
    );
  }

}
