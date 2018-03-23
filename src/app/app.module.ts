import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, NavbarComponent],
  imports: [BrowserModule, AppRouting],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
