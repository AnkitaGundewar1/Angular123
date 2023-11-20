import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
   // {path:"registration", component:RegistrationComponent},
   { path: 'registration', component: RegistrationComponent },
   { path: 'recipes', component: RecipesComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'update', component: UpdateComponent },

    {path:"", redirectTo:"", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
