import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from '../material.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScheduleTripComponent } from './schedule-trip/schedule-trip.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TripPageComponent } from './trip-page/trip-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, HomePageComponent, HeaderComponent, FooterComponent, ScheduleTripComponent, SidebarComponent, TripPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
