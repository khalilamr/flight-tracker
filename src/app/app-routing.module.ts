import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: RegisterComponent },
  // Redirection par défaut : si aucune route n'est spécifiée, on redirige vers le dashboard.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Route wildcard pour rediriger toutes les routes non définies
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
