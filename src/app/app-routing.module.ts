import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinComponent } from './components/cabin/cabin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OurCabinsComponent } from './components/our-cabins/our-cabins.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'ourcabins', component:OurCabinsComponent},
  {path:'cabin', component:CabinComponent},
  {path:'contact',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
