import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { DetailsComponent } from './details/details.component';
import { CatalogComponent } from './catalog/catalog.component';
import { EditComponent } from './edit/edit.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },

  //Start - user routing

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreateComponent },
  { path: 'details', component: DetailsComponent },

  { path: 'catalog', component: CatalogComponent },
  { path: 'edit', component: EditComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'contact', component: ContactUsComponent },
];
