// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarComponent } from './car/car.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SellCarsComponent } from './sell-cars/sell-cars.component';
import { SellCarsFormComponent } from './sell-cars-form/sell-cars-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CarComponent,
    LogoutComponent,
    LayoutComponent,
    SellCarsComponent,
    SellCarsFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
