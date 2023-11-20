import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core'
import { Login } from './login.model';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(@Inject(HttpClient) private client : any) { }

  registrationUrl = "https://localhost:7137/api/Registration/";
  vegUrl = "https://localhost:7137/api/Veg_Recipes";
  nonVegUrl = "https://localhost:7137/api/NonVeg_Recipes";

  getData!: Registration;


  getVegRecipes() {
    return this.client.get(this.vegUrl);
  }

  postVegRecipe(recipeGroup:any) {
    return this.client.post(this.vegUrl,recipeGroup);
  }

  postNonVegRecipe(recipeGroup:any) {
    return this.client.post(this.nonVegUrl,recipeGroup);
  }

  getNonVegRecipes() {
    return this.client.get(this.nonVegUrl);
  }
  getRegisteredUser() {
    return this.client.get(this.registrationUrl);
  }
  postUser(userGroup:any) {
    return this.client.post(this.registrationUrl,userGroup);
  }

  viewProfile(id: number)
  {
    return this.client.get('https://localhost:7137/api/Registration/'+id);
  }


  getById(id: number) {
    return this.client.get(this.registrationUrl+"/"+id);
   }

   updateUser(empId:number,profileGroup:any)
  {
    return this.client.put(this.registrationUrl + empId,profileGroup);
  }

  updateVeg(vegId:number,vegGroup:any)
  {
    return this.client.put(this.vegUrl + vegId,vegGroup);
  }

}
