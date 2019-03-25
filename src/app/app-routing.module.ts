import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoadContactsComponent } from './load-contacts/load-contacts.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'loader', component: LoaderComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'contacts-list', component: LoadContactsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
