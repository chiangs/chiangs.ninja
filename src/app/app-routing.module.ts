import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';

const appRoutes: Routes = [
  /* children requires secondary router outlet
  this allows index of, and details view in one view */
  { path: 'welcome', component: LandingComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  // { path: 'muaythai', component, MuaythaiComponent },
  // { path: 'photography', component: PhotographyComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [{ path: ':id/:name', component: ProjectsComponent }]
  },
  // { path: 'design', component: DesignComponent, children: [
  // { path: ':id/:name', component: DesignComponent },
  // ] },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
