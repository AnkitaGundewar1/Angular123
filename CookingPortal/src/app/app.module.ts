import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { HomepageComponent } from './homepage/homepage.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateComponent } from './update/update.component';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { AddvegComponent } from './addveg/addveg.component';
import { AddnonvegComponent } from './addnonveg/addnonveg.component';
import { UpdatevegComponent } from './updateveg/updateveg.component';
import { UpdatenonvegComponent } from './updatenonveg/updatenonveg.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomepageComponent,
    RecipesComponent,
    ProfileComponent,
    UpdateComponent,
    VegComponent,
    NonvegComponent,
    AddvegComponent,
    AddnonvegComponent,
    UpdatevegComponent,
    UpdatenonvegComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule, routing, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

