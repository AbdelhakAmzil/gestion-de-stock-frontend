import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { PageLogin } from './pages/page-login/page-login';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: PageLogin},
    {path:'inscrire', component: PageInscription},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
