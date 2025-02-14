import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { path: 'login', component: LoginComponent , ...canActivate(redirectLoggedInToDashboard)},
  { path: 'signin', component: RegisterComponent, ...canActivate(redirectLoggedInToDashboard) },
  // Redirection par défaut : si aucune route n'est spécifiée, on redirige vers le dashboard.
  { path: '', component: DashboardComponent, ...canActivate(redirectUnauthorizedToLogin) },
  // Route wildcard pour rediriger toutes les routes non définies

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
