import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // ✅ ajouter
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { ApiModule } from '../gs-api/src/api.module'; // ✅ ajouter
import { HttpInterceptorService } from './services/interceptor/http-interceptor.service'; // ✅ ajouter — vérifiez le chemin exact

import { App } from './app';
import { PageLogin } from './pages/page-login/page-login';
import { PageInscription } from './pages/page-inscription/page-inscription';
import { PageDashboard } from './pages/page-dashboard/page-dashboard';
import { PageStatistiques } from './pages/page-statistiques/page-statistiques';
import { Menu } from './composants/menu/menu';
import { Header } from './composants/header/header';
import { PageArticles } from './pages/articles/page-articles/page-articles';
import { DetailsArticles } from './composants/details-articles/details-articles';
import { Loader } from './composants/loader/loader/loader';
import { BouttonAction } from './composants/boutton-action/boutton-action';
import { DetailCltFrs } from './composants/detail-clt-frs/detail-clt-frs';
import { DetailCmdCltFrs } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs';
import { DetailCmd } from './composants/detail-cmd/detail-cmd';
import { DetailMvtStkArticle } from './composants/detail-mvt-stk-article/detail-mvt-stk-article';
import { DetailMvtStk } from './composants/detail-mvt-stk/detail-mvt-stk';
import { DetailUtilisateur } from './composants/detail-utilisateur/detail-utilisateur';
import { NouveauCltFrs } from './composants/nouveau-clt-frs/nouveau-clt-frs';
import { NouveauCmdCltFrs } from './composants/nouveau-cmd-clt-frs/nouveau-cmd-clt-frs';
import { Pagination } from './composants/pagination/pagination';
import { NouvelArticle } from './pages/articles/nouvel-article/nouvel-article';
import { NouvelleCategory } from './pages/categories/nouvelle-category/nouvelle-category';
import { PageCategories } from './pages/categories/page-categories/page-categories';
import { PageClient } from './pages/client/page-client/page-client';
import { PageFournisseur } from './pages/fournisseur/page-fournisseur/page-fournisseur';
import { PageMvtstk } from './pages/mvtstk/page-mvtstk/page-mvtstk';
import { PageCmdCltFrs } from './pages/page-cmd-clt-frs/page-cmd-clt-frs';
import { ChangerMotDePasse } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe';
import { PageProfil } from './pages/profil/page-profil/page-profil';
import { NouvelUtilisateur } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur';
import { PageUtilisateur } from './pages/utilisateur/page-utilisateur/page-utilisateur';

@NgModule({
  declarations: [
    App,
    PageLogin,
    PageInscription,
    PageDashboard,
    PageStatistiques,
    Menu,
    Header,
    PageArticles,
    Loader,
    NouveauCmdCltFrs,
    DetailsArticles,
    Pagination,
    NouvelArticle,
    NouvelleCategory,
    BouttonAction,
    DetailCltFrs,
    DetailCmdCltFrs,
    DetailCmd,
    DetailMvtStkArticle,
    DetailMvtStk,
    DetailUtilisateur,
    PageCategories,
    PageClient,
    PageFournisseur,
    PageMvtstk,
    PageCmdCltFrs,
    NouveauCltFrs,
    ChangerMotDePasse,
    PageProfil,
    NouvelUtilisateur,
    PageUtilisateur,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule, // ✅
    ApiModule.forRoot({ rootUrl: 'http://localhost:8081' }), // ✅
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService, // ✅
      multi: true,
    },
  ],
  bootstrap: [App],
})
export class AppModule {}
