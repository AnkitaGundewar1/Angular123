import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-addnonveg',
  templateUrl: './addnonveg.component.html',
  styleUrls: ['./addnonveg.component.css']
})
export class AddnonvegComponent {
  recipeGroup = new FormGroup({
    //id: string
    recipe_Name : new FormControl("",Validators.required),
    recipe_Price :  new FormControl("",Validators.required),
    
  });

  constructor(@Inject(RestService) private srvc:any, @Inject(Router) private rt:any) { }

  postNonVegRecipe():void {
    console.log(this.recipeGroup.value);
    this.srvc.postNonVegRecipe(this.recipeGroup.value).subscribe(
      (res:any)=>{
          alert('Recipe Successfully Added!')
          this.recipeGroup.reset();
          this.rt.navigateByUrl("nonveg"); 
      },
      (err:any)=>{
        alert(JSON.stringify(err));
      }
    );
  }
  
}
