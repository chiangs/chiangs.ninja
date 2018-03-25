import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: 'welcome', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  // path: 'home',
  // component: ,
  //     children: [
  //       { path: 'about', component: AboutComponent },
  //       { path: 'contact', component: ContactFormComponent },
  //       { path: 'muaythai', component: MuaythaiComponent },
  //       { path: 'photography', component: PhotographyComponent }
  //     ]
  // },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }
  //   { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
