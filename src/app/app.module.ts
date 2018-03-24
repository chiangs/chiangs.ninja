import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TitleComponent } from './landing/title/title.component';
import { EmailComponent } from './landing/email/email.component';
import { DescriptionComponent } from './landing/description/description.component';
import { ProcessComponent } from './shared/process/process.component';
import { MenuComponent } from './landing/menu/menu.component';
import { MeService } from './services/me.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    TitleComponent,
    EmailComponent,
    DescriptionComponent,
    ProcessComponent,
    MenuComponent,
    AboutComponent
  ],
  imports: [BrowserModule, AppRouting],
  providers: [MeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
