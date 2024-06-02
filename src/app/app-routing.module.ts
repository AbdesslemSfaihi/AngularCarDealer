import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarComponent } from './car/car.component';
import { LayoutComponent } from './layout/layout.component';
import { SellCarsComponent } from './sell-cars/sell-cars.component';
import { SellCarsFormComponent } from './sell-cars-form/sell-cars-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cars', component: CarComponent },
      { path: 'sell-cars', component: SellCarsComponent },
      { path: 'sell-cars-form', component: SellCarsFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
