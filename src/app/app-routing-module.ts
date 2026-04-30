import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { PageLogin } from './pages/page-login/page-login';
import { PageDashboard } from './pages/page-dashboard/page-dashboard';
import { PageStatistiques } from './pages/page-statistiques/page-statistiques';

const routes: Routes = [
  { path: 'login', component: PageLogin },
  { path: 'inscrire', component: PageInscription },
  {
    path: '',
    component: PageDashboard,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiques
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
