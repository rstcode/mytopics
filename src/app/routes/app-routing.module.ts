import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { TopicComponent } from '../components/topic/topic.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ErrorConnectionComponent } from '../components/error-connection/error-connection.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from './auth-guards.routing.service';
import { PopupModelComponent } from '../components/popup-mdl/popup-mdl.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'topic/addnew',
    component: PopupModelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'topic/edit/:type',
    component: PopupModelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'topic/:type',
    component: TopicComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'error',
    component: ErrorConnectionComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }