import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelHomeComponent } from './travel-home/travel-home.component';
import { TravelRegisterComponent } from './travel-register/travel-register.component';
import { TravelContactusComponent } from './travel-contactus/travel-contactus.component';
import { ShowTravelComponent } from './show-travel/show-travel.component';
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  {
    path:'travel-home', component: TravelHomeComponent
  },
  {
    path:'travel-register', component: TravelRegisterComponent 
  },
  {
    path:'travel-contactus', component: TravelContactusComponent
  },
  {
    path:'show-travel', component: ShowTravelComponent, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
