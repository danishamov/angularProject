import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CreateComponent } from './user/create/create.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },

  //Start - user routing

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateComponent },
  { path: 'details', component: DetailsComponent },
];
