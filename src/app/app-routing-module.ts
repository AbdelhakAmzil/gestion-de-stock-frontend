import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { PageLogin } from './pages/page-login/page-login';
import { PageDashboard } from './pages/page-dashboard/page-dashboard';
import { PageStatistiques } from './pages/page-statistiques/page-statistiques';
import { PageArticles } from './pages/articles/page-articles/page-articles';
import { ApplicationGuardService } from './services/guard/application-guard.service';
import { NouvelArticle } from './pages/articles/nouvel-article/nouvel-article';
import { PageMvtstk } from './pages/mvtstk/page-mvtstk/page-mvtstk';
import { PageClient } from './pages/client/page-client/page-client';
import { NouveauCltFrs } from './composants/nouveau-clt-frs/nouveau-clt-frs';
import { PageCmdCltFrs } from './pages/page-cmd-clt-frs/page-cmd-clt-frs';
import { NouveauCmdCltFrs } from './composants/nouveau-cmd-clt-frs/nouveau-cmd-clt-frs';
import { PageFournisseur } from './pages/fournisseur/page-fournisseur/page-fournisseur';
import { PageCategories } from './pages/categories/page-categories/page-categories';
import { NouvelleCategory } from './pages/categories/nouvelle-category/nouvelle-category';
import { PageUtilisateur } from './pages/utilisateur/page-utilisateur/page-utilisateur';
import { NouvelUtilisateur } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur';
import { PageProfil } from './pages/profil/page-profil/page-profil';
import { ChangerMotDePasse } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe'; // ✅ vérifiez le chemin

const routes: Routes = [
  {
    path: 'login',
    component: PageLogin,
  },
  {
    path: 'inscrire',
    component: PageInscription,
  },
  {
    path: '',
    redirectTo: 'login', // ✅ rediriger vers login par défaut
    pathMatch: 'full',
  },
  {
    path: 'dashboard', // ✅ renommer la route principale
    component: PageDashboard,
    canActivate: [ApplicationGuardService],
    children: [
      { path: 'statistiques', component: PageStatistiques },
      { path: 'articles', component: PageArticles },
      { path: 'nouvelarticle', component: NouvelArticle },
      { path: 'nouvelarticle/:idArticle', component: NouvelArticle },
      { path: 'mvtstk', component: PageMvtstk },
      { path: 'clients', component: PageClient },
      { path: 'nouveauclient', component: NouveauCltFrs, data: { origin: 'client' } },
      { path: 'nouveauclient/:id', component: NouveauCltFrs, data: { origin: 'client' } },
      { path: 'commandesclient', component: PageCmdCltFrs, data: { origin: 'client' } },
      { path: 'nouvellecommandeclt', component: NouveauCmdCltFrs, data: { origin: 'client' } },
      { path: 'fournisseurs', component: PageFournisseur },
      { path: 'nouveaufournisseur', component: NouveauCltFrs, data: { origin: 'fournisseur' } },
      { path: 'nouveaufournisseur/:id', component: NouveauCltFrs, data: { origin: 'fournisseur' } },
      { path: 'commandesfournisseur', component: PageCmdCltFrs, data: { origin: 'fournisseur' } },
      { path: 'nouvellecommandefrs', component: NouveauCmdCltFrs, data: { origin: 'fournisseur' } },
      { path: 'categories', component: PageCategories },
      { path: 'nouvellecategorie', component: NouvelleCategory },
      { path: 'nouvellecategorie/:idCategory', component: NouvelleCategory },
      { path: 'utilisateurs', component: PageUtilisateur },
      { path: 'nouvelutilisateur', component: NouvelUtilisateur },
      { path: 'profil', component: PageProfil },
      { path: 'changermotdepasse', component: ChangerMotDePasse },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload', // ✅
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
