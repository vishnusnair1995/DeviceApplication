import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

//    { path: 'dashboard', loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule) },

 ];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
