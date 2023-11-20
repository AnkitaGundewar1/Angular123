
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { AddvegComponent } from './addveg/addveg.component';
import { AddnonvegComponent } from './addnonveg/addnonveg.component';
import { UpdatevegComponent } from './updateveg/updateveg.component';
import { UpdatenonvegComponent } from './updatenonveg/updatenonveg.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';

var routes : Routes=[
  {path:'homepage', component:HomepageComponent},
    {path:'login', component:LoginComponent},
    {path:'logout', component:LogoutComponent},
   { path: 'registration', component: RegistrationComponent },
   { path: 'recipes', component: RecipesComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'update', component: UpdateComponent },
   { path: 'veg', component: VegComponent },
   { path: 'nonveg', component: NonvegComponent },
   { path: 'addveg', component: AddvegComponent },
   { path: 'addnonveg', component: AddnonvegComponent },
   { path: 'updateveg', component: UpdatevegComponent },
   { path: 'updatenonveg', component: UpdatenonvegComponent },

    {path:"", redirectTo:"", pathMatch:"full"},

  ];
  
export const routing = RouterModule.forRoot(routes);