import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadContactsComponent } from './load-contacts/load-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressBarComponent,
    HeaderComponent,
    LoaderComponent,
    ContactListComponent,
    ContactsComponent,
    LoadContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [ProgressBarComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
