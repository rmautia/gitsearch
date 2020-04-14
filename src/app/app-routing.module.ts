import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeFormComponent } from './home-form/home-form.component'
import { ReadmeComponent } from './readme/readme.component'

import { HomeComponent } from './home/home.component';
import { RepohomeComponent } from './repohome/repohome.component';
import { LandingComponent } from './landing/landing.component'
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'repohome', component: RepohomeComponent},
  { path: 'homeform', component: HomeFormComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo:"/landing", pathMatch:"full"},
  { path: '**', component: NotFoundComponent},
  { path: 'readme', component: ReadmeComponent},
  
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
