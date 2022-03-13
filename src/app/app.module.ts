import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurCabinsComponent } from './components/our-cabins/our-cabins.component';
import { CabinComponent } from './components/cabin/cabin.component';
import { CabinBuilderComponent } from './components/cabin-builder/cabin-builder.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    HeroComponent,
    AboutUsComponent,
    OurCabinsComponent,
    CabinComponent,
    CabinBuilderComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
