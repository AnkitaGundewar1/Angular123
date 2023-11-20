import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-addveg',
  templateUrl: './addveg.component.html',
  styleUrls: ['./addveg.component.css']
})
export class AddvegComponent {

  recipeGroup = new FormGroup({
    //id: string
    recipe_Name : new FormControl("",Validators.required),
    recipe_Price :  new FormControl("",Validators.required),
    
  });

  constructor(@Inject(RestService) private srvc:any, @Inject(Router) private rt:any) { }

  postVegRecipe():void {
    console.log(this.recipeGroup.value);
    this.srvc.postVegRecipe(this.recipeGroup.value).subscribe(
      (res:any)=>{
          alert('Recipe Successfully Added!')
          this.recipeGroup.reset();
          this.rt.navigateByUrl("veg"); 
      },
      (err:any)=>{
        alert(JSON.stringify(err));
      }
    );
  }
}
